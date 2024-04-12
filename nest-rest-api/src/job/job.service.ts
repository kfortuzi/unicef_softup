import { Injectable, NotFoundException } from '@nestjs/common';
import { JobRepository } from './job.repository';
import { Job } from './dto/job.dto';
import { JobSummaryDTO } from './dto/job-summary.dto';
import { jobs } from '@prisma/client';
import { ChatCompletionMessageParam } from 'openai/resources';
import { AkpaModels } from 'src/openai/models';
import { AkpaPrompts } from 'src/openai/promptContent';
import { OpenAIService } from 'src/openai/openai.service';
import { JobTipsDto } from './dto/job-tips.dto';

@Injectable()
export class JobService {
  keySkills: any;
  constructor(
    private jobRepository: JobRepository,
    private openAIService: OpenAIService,
  ) {}

  async getJobs(take: string, cursor?: string) {
    return this.jobRepository.findMany(cursor, parseInt(take));
  }

  async getJobsByFilter(filter: string) {
    try {
      const filteredJobs = await this.jobRepository.getJobsByFilter(filter);
      if (!filteredJobs)
        throw new NotFoundException({ message: 'Job not found!' });
      return filteredJobs;
    } catch (error) {
      throw new Error(`${error}`);
    }
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

  async getJobDetails(jobId: string): Promise<jobs> {
    const jobData = await this.jobRepository.findOneById(jobId);
    if (!jobData) throw new NotFoundException({ message: 'Job not found!' });
    return jobData;
  }

  async getLatestJobsByTitle(title: string): Promise<string> {
    const jobs = await this.jobRepository.getLatestJobsByTitle(title);
    if (jobs.length === 0) {
      return 'No jobs found.';
    }
    const jobTitles = jobs.map((job) => job.title).join(', ');
    return `Latest jobs related to "${title}": ${jobTitles}`;
  }

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

  async getTipsAndInterviewQuestions(
    jobId: string,
    userId: string,
  ): Promise<JobTipsDto> {
    try {
      const job = await this.jobRepository.findOneById(jobId);
      if (!job) throw new NotFoundException({ message: 'Job not found!' });
      const tips = await this.getJobTips(job.title, userId);
      const interviewQuestions = await this.getJobCommonInterviewQuestion(
        job.title,
        userId,
      );
      return {
        tips,
        interviewQuestions,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getJobTips(jobTitle: string, userId: string) {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.consuelingCareerPrompt,
        },
        {
          role: 'user',
          content: jobTitle,
        },
      ];
      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.CHAT,
        userId,
        'TipsAndAdvices',
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getJobCommonInterviewQuestion(jobTitle: string, userId: string) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.commonInterviewQuestion,
      },
      {
        role: 'user',
        content: jobTitle,
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'InterviewQuestions',
    );
  }
}
