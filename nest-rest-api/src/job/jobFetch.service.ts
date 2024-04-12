import { Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { Job } from './dto/job.dto';
import dayjs from 'dayjs';
import { JobListDTO } from './dto/job-list.dto';
import { AkpaJobDTO } from './dto/akpa-job.dto';
import { jobs, EducationType, JobType, Prisma } from '@prisma/client';
import { Cron } from '@nestjs/schedule';

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
    const url = process.env.FEATURED_JOBS_URL as string;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        Referer: 'https://www.puna.gov.al/',
        cookie:
          '_ga=GA1.1.2060805193.1707859283; visid_incap_2810608=aGfqP6l3Sfejd/U+Vio1Sbfy5mUAAAAAQkIPAAAAAACAWzuzAU9qf7Eq3RxbdhKVVCT4ZKm1xsD7; incap_ses_1091_2810608=mnocfaDH8gDyzZrs5gMkD33xGGYAAAAAnczCyon6uhq42KECaWjGpQ==; _ga_BQB8F7PK08=GS1.1.1712910726.14.0.1712910726.0.0.0',
      },
      body: JSON.stringify({
        token: null,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async fetchJobDetails(jobId: number) {
    const url = `${process.env.BASE_JOB_URL}${jobId}` as string;
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
    return detail.response[0];
  }

  async saveJob(job: Prisma.jobsCreateInput) {
    await this.jobRepository.create(job);
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

  concatenateSkills = (skills: any[]) => {
    return skills && skills.length
      ? skills.map((obj) => obj.name[1]).join(',')
      : '';
  };

  transformJobDetailsToModel(job: JobListDTO, details: AkpaJobDTO): jobs {
    return {
      referenceId: job.id,
      title: job.name,
      description: job.description || null,
      dateStart: new Date(),
      dateEnd: new Date(),
      address: job.address_id ? job.address_id[1] : null,
      location: job.county_id ? job.county_id[1] : '',
      type: details.contract_type_id
        ? this.mapContractTypeToEnum(details.contract_type_id[1])
        : null,
      contractDuration: null,
      company: job.punedhenes_id ? job.punedhenes_id.name : '',
      vacantPositions: job.vacant_positions,
      companyLogo: null,
      basicSkills: this.concatenateSkills(details.basic_skill_ids),
      communicationSkill: details.communication_skills === 'yes',
      computerSkills: this.concatenateSkills(details.computer_line_ids),
      foreignLanguage: this.concatenateSkills(details.foreign_language_ids),
      experience: details.job_experience_id
        ? details.job_experience_id[1]
        : null,
      skills: this.concatenateSkills(details.ss_skills),
      specializations: this.concatenateSkills(details.specialization_lines_ids),
      skillLines: this.concatenateSkills(details.skill_lines_ids),
      educationType: details.education_level
        ? this.mapEducationLevelToEnum(details.education_level[1])
        : null,
      paymentLevel: null,
      suitableForDisabilities:
        job.suitable_for_disabilities === 'jo' ? false : true,
      needDrivingLicense: details.job_mobility === 'jo' ? false : true,
      isUnvailable: false,
      createdAt: new Date(),
    } as jobs;
  }

  private mapContractTypeToEnum(contractType: string): JobType | null {
    switch (contractType.toLowerCase()) {
      case 'Me kohë të plotë':
        return JobType.FullTime;
      case 'Me kohë të pjesshme':
        return JobType.PartTime;
      case 'Punë në Sektorin Publik':
        return JobType.Contract;
      default:
        return null;
    }
  }

  private mapEducationLevelToEnum(
    educationLevel: string,
  ): EducationType | null {
    switch (educationLevel.toLowerCase()) {
      case 'Arsim i mesëm i lartë (Gjimnaz)':
      case 'Arsim fillor (6-vjeçar)':
        return EducationType.HighSchool;
      case 'Bachelor (3 vjeçar)':
        return EducationType.Bachelor;
      case 'Master profesional (3+1.5 vjet)':
      case 'Master shkencor (3+2 vjet)':
        return EducationType.Master;
      case 'Doktoraturë':
        return EducationType.PhD;
      default:
        return null;
    }
  }
}
