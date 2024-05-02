import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { jobs, EducationType, JobType, Prisma } from '@prisma/client';
import { Cron } from '@nestjs/schedule';
import { Document } from '@langchain/core/documents';
import { PineconeStore } from '@langchain/pinecone';
import dayjs from 'dayjs';

import { Config } from 'config';
import { akpaPageDocs } from 'assets/docs/akpaWebpage';
import { JobRepository } from './job.repository';
import { Job } from './dto/job.dto';
import { JobListDTO } from './dto/job-list.dto';
import { AkpaJobDTO } from './dto/akpa-job.dto';
import { SmService } from '../sm/sm.service';
import pinecone from 'src/clients/pinecone';
import embeddings from 'src/clients/embeddings';

@Injectable()
export class JobsFetchService {
  constructor(
    private jobRepository: JobRepository,
    private config: Config,
    private sm: SmService,
  ) {}

  @Cron('0 23 * * *')
  async fetchAndSaveJob() {
    await this.updateJobsBasedOnAkpa();
    await this.refreshVectorialData();
  }

  async fetchAndSaveJobForTestingPurpose() {
    this.updateJobsBasedOnAkpa();
  }

  async updateJobsBasedOnAkpa() {
    const list = await this.fetchFeaturedJobs();
    if (!list.response.length) {
      throw new NotFoundException('No jobs Available');
    }

    for (const job of list.response) {
      await this.processJob(job);
    }
  }

  async processJob(job: JobListDTO) {
    const jobInOurDb = await this.jobRepository.findOneReferenceId(job.id);
    if (!jobInOurDb) {
      const details = await this.fetchJobDetails(job.id);
      const transformedJob = this.transformJobDetailsToModel(job, details);
      return await this.saveJob(transformedJob);
    }

    return await this.checkAndUpdateJob(jobInOurDb);
  }

  async fetchFeaturedJobs() {
    const { value: cookie } = await this.sm.getSecret<{ value: string }>(
      this.config.smCookieKey,
    );
    const url = this.config.featuredJobsUrl;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        Referer: 'https://www.puna.gov.al/',
        cookie,
      },
      body: JSON.stringify({
        token: null,
      }),
    });

    if (!response.ok) {
      throw new InternalServerErrorException(
        `HTTP error! status: ${response.status}`,
      );
    }
    return response.json();
  }

  async fetchJobDetails(jobId: number) {
    const { value: cookie } = await this.sm.getSecret<{ value: string }>(
      this.config.smCookieKey,
    );

    const url = `${this.config.baseJobUrl}${jobId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8',
        Referer: 'https://www.puna.gov.al/',
        cookie,
      },
      body: JSON.stringify({ token: null }),
    });

    if (!response.ok) {
      throw new InternalServerErrorException('Network response was not ok.');
    }
    const detail = await response.json();
    return detail.response[0];
  }

  async saveJob(job: Prisma.jobsCreateInput) {
    return await this.jobRepository.create(job);
  }

  async deactivateJob(referenceId: number) {
    const jobsToUpdate =
      await this.jobRepository.findOneReferenceId(referenceId);
    if (jobsToUpdate !== null) {
      return this.jobRepository.updateJobStatus(jobsToUpdate.id);
    }
  }

  async checkAndUpdateJob(job: Job) {
    const today = dayjs().startOf('day');
    const dateEnd = dayjs(job.dateEnd).startOf('day');
    if (dateEnd.isBefore(today)) {
      return await this.deactivateJob(job.referenceId);
    }
    return job;
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

  async generateDocsFromJobs() {
    const jobs = await this.jobRepository.findMany();

    return jobs.map((job) => {
      return new Document({
        pageContent: `Hapet vend i lire pune si ${job.title} ne kompanine ${job.company}, adresa ${job.address}, ne qytetin e ${job.location}. Eksperienca e nevojshme eshte:  ${job.experience}. Punekerkuesi duhet te kete keto aftesi ${job.basicSkills},${job.skillLines}. Per te aplikuar mund te vizitoni linkun: https://www.puna.gov.al/job/${job.referenceId}`,
        metadata: { jobTitle: `${job.title}`, jobLocation: `${job.location}` },
      });
    });
  }

  async refreshVectorialData() {
    const pineconeIndex = pinecone.Index(this.config.pineconeIndex);

    const jobDocs = await this.generateDocsFromJobs();

    const docs = [...jobDocs, ...akpaPageDocs];

    await pineconeIndex.deleteAll();
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex,
    });
  }
}
