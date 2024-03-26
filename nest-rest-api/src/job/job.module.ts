import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobRepository } from './job.repository';
import { JobsFetchService } from './jobFetch.service';
import { ScheduleModule } from '@nestjs/schedule';
import { UserJobsRepository } from './userJobs.repository';
import { UserRecommendedJobsService } from './userJobs.service';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [ScheduleModule.forRoot(), UserModule],
  controllers: [JobController],
  providers: [
    JobService,
    JobRepository,
    JobsFetchService,
    UserRecommendedJobsService,
    UserJobsRepository,
    UserRepository,
  ],
})
export class JobModule {}
