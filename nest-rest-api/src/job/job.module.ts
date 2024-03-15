import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobRepository } from './job.repository';
import { JobsFetchService } from './jobFetch.service';
import { ScheduleModule } from '@nestjs/schedule';
import { UserJobsRepository } from './userJobs.repository';
import { UserRecommendedJobsService } from './userJobs.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [JobController],
  providers: [
    JobService,
    JobRepository,
    JobsFetchService,
    UserRecommendedJobsService,
    UserJobsRepository,
  ],
})
export class JobModule {}
