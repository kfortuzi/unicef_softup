import { Injectable, NotFoundException } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { Job } from './dto/job.dto';
import { JobSummaryDTO } from './dto/job-summary.dto';

@Injectable()
export class JobService {
  keySkills: any;
  constructor(private jobRepository: JobRepository) {}

  findJobs(cursor?: string, take?: number) {
    return this.jobRepository.findMany(cursor, take);
  }

  async findJob(jobId: string): Promise<JobSummaryDTO> {
    const jobData = await this.jobRepository.findOneById(jobId);
    if (!jobData) throw new NotFoundException({ message: 'Job not found!' });
    return {
      title: jobData.title,
      description: jobData.description,
      location: jobData.location,
      experience: jobData.experience,
      basicSkills: jobData.basicSkills,
      skillLines: jobData.skillLines,
      skills: jobData.skills,
    };
  }

  async getLatestJobsByTitle(title: string): Promise<string> {
    const jobs = await this.jobRepository.getLatestJobsByTitle(title);
    if (jobs.length === 0) {
      return 'No jobs found.';
    }
    const jobTitles = jobs.map((job) => job.title).join(', ');
    return `Latest jobs related to "${title}": ${jobTitles}`;
  }
  // generate tags
  generateTagsForJob(job: Job): string {
    const skillsFields = [
      job.basicSkills,
      job.communicationSkill ? 'Komunikim Efektiv, Punë në Ekip' : '',
      job.computerSkills,
      job.foreignLanguage,
      job.experience,
      job.skills,
      job.specializations,
      job.skillLines,
    ];

    const allSkillsConcatenated = skillsFields.filter(Boolean).join(',');
    let uniqueTags = [
      ...new Set(
        allSkillsConcatenated
          .split(',')
          .map((skill) => skill.trim().toLowerCase())
          .filter((skill) => skill !== ''),
      ),
    ];

    uniqueTags = uniqueTags.filter((tag) => this.keySkills.has(tag));
    return uniqueTags.join(',');
  }

  async updateJobtag(id: number, tags: string): Promise<void> {
    return this.jobRepository.updateTagsJob(id, tags);
  }
}
