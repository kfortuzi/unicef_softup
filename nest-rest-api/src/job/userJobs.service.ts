import { Injectable } from '@nestjs/common';
import { UserJobsDTO } from './dto/user-jobs.dto';
import { UserJobsRepository } from './userJobs.repository';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UserRecommendedJobsService {
  constructor(private repository: UserJobsRepository) {}

  @Cron('0 1 * * *')
  async recommendJob(dto: UserJobsDTO) {
    return this.repository.createUserRecommendedJob(dto.userId, dto.jobId);
  }

  async getRecommendedJobsForUser(userId: string) {
    const recommendations = await this.repository.findJobsByUserId(userId);
    return recommendations.map((recommendation) => recommendation.job);
  }
}
