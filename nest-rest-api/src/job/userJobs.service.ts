import { Injectable } from '@nestjs/common';
import { UserJobsRepository } from './userJobs.repository';
import { Cron } from '@nestjs/schedule';
import { UserRepository } from 'src/user/user.repository';
import { JobRepository } from './job.repository';

@Injectable()
export class UserRecommendedJobsService {
  constructor(
    private userJobsRepository: UserJobsRepository,
    private userRepository: UserRepository,
    private jobRepository: JobRepository,
  ) {}

  @Cron('0 1 * * *')
  async recommendJob() {
    const users = await this.userRepository.findMany();
    users.forEach(async (user) => {
      if (user.profession) {
        const jobs = await this.jobRepository.findJobsMatchingUserProfession(
          user.profession,
        );
        jobs.forEach((job) => {
          return this.userJobsRepository.createUserRecommendedJob(
            user.id,
            job.id,
          );
        });
      }
    });
  }

  async getRecommendedJobsForUser(userId: string) {
    return this.userJobsRepository.findJobsByUser(userId);
  }
}
