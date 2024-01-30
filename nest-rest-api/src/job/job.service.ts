import { Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';

@Injectable()
export class JobService {
  constructor(private jobRepository: JobRepository) {}

  findJobs(cursor?: string, take?: number) {
    return this.jobRepository.findMany(cursor, take);
  }

  async getLatestJobsByTitle(title: string): Promise<string> {
    const jobs = await this.jobRepository.getLatestJobsByTitle(title);
    if (jobs.length === 0) {
      return 'No jobs found.';
    }
    const jobTitles = jobs.map(job => job.title).join(', ');
    return `Latest jobs related to "${title}": ${jobTitles}`;
  }

  //TODO: more services to be added, post, patch, get_user_jobs
  
}
