import { Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { Job } from './dto/job.dto';
import dayjs from 'dayjs';
import { Cron } from '@nestjs/schedule';
import { JobListDTO } from './dto/job-list.dto';
import { AkpaJobDTO } from './dto/akpa-job.dto';

@Injectable()
export class JobsFetchService {
  constructor(private jobRepository: JobRepository) {}

  @Cron('0 23 * * *')
  async fetchAndSaveJob() {
    const list = await this.fetchFeaturedJobs();
    if (list.response.length) {
      for (const job of list.response) {
        await this.processJob(job);
      }
    } else {
      console.log('No jobs available');
    }
  }

  async processJob(job: JobListDTO) {
    const jobExist = await this.jobRepository.findOneReferenceId(job.id);
    if (jobExist) {
      await this.checkAndUpdateJob(jobExist);
    } else {
      const details = await this.fetchJobDetails(job.id);
      const transformedJob = this.transformJobDetailsToModel(job, details);
      await this.saveJob(transformedJob);
    }
  }

  async fetchFeaturedJobs() {
    const url: string = process.env.FEATURED_JOBS_URL as string;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        token: null,
        filters: [],
        punaLoce: [],
        punaProfe: [],
        punaUnitLocation: [],
        showOnlyFavourites: false,
        ascending: false,
        whatIsAscending: 'create_date',
        qarksIds: [],
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async fetchJobDetails(jobId: number): Promise<AkpaJobDTO> {
    const url: string = `${process.env.BASE_JOB_URL}${jobId}` as string;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ token: null }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const detail = await response.json();
    return detail[0];
  }

  async saveJob(job: Job) {
    await this.jobRepository.create({ data: job });
  }

  async deactivateJob(referenceId: number) {
    const jobsToUpdate =
      await this.jobRepository.findOneReferenceId(referenceId);
    if (jobsToUpdate !== null) {
      return this.jobRepository.updateJobStatus(jobsToUpdate.id);
    }
  }

  async checkAndUpdateJob(jobExist: Job) {
    const today = dayjs().startOf('day');
    const dateEnd = dayjs(jobExist.dateEnd).startOf('day');
    if (dateEnd.isBefore(today)) {
      await this.deactivateJob(jobExist.referenceId);
    }
  }

  transformJobDetailsToModel(job: JobListDTO, details: AkpaJobDTO): Job {
    const concatenateSkills = (skills: any[]) => {
      return skills && skills.length
        ? skills.map((obj) => obj.name[1]).join(',')
        : '';
    };

    return {
      referenceId: job.id,
      title: job.name,
      description: job.description,
      dateStart: details.date_start_notification,
      dateEnd: details.date_end_notification,
      address: job.address_id ? job.address_id[1] : null,
      location: job.county_id ? job.county_id[1] : '',
      type: details.contract_type_id ? details.contract_type_id[1] : null,
      contractDuration: details.contract_duration_id
        ? details.contract_duration_id.contract_duration_id[1]
        : null,
      company: job.punedhenes_id ? job.punedhenes_id.name : '',
      vacantPositions: job.vacant_positions,
      companyLogo: null,
      basicSkills: concatenateSkills(details.basic_skill_ids),
      communicationSkill: details.communication_skills === 'yes',
      computerSkills: concatenateSkills(details.computer_line_ids),
      foreignLanguage: concatenateSkills(details.foreign_language_ids),
      experience: details.job_experience_id
        ? details.job_experience_id[1]
        : null,
      skills: concatenateSkills(details.ss_skills),
      specializations: concatenateSkills(details.specialization_lines_ids),
      skillLines: concatenateSkills(details.skill_lines_ids),
      educationType: details.education_level
        ? details.education_level.education_level[1]
        : null,
      paymentLevel: details.payment_level_id
        ? details.payment_level_id.payment_level_id[1]
        : null,
      suitableForDisabilities:
        job.suitable_for_disabilities === 'jo' ? false : true,
      needDrivingLicense: details.job_mobility,
      isUnvailable: false,
      createdAt: new Date(),
    } as unknown as Job;
  }
}
