import { Injectable } from '@nestjs/common';
import { UserRecommendedJobsDTO } from './dto/user-jobs.dto';
import { UserJobsRepository } from './userJobs.repository';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UserRecommendedJobsService {
  constructor(private repository: UserJobsRepository) {}

  @Cron('0 1 * * *')
  async recommendJob(dto: UserRecommendedJobsDTO) {
    return this.repository.createUserRecommendedJob(dto.userId, dto.jobId);
  }

  async getRecommendedJobsForUser(userId: string) {
    return await this.repository.findJobsByUserId(userId);
  }
}
