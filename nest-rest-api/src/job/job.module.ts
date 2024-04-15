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
import { OpenAIModule } from 'src/openai/openai.module';
import { OpenAIService } from 'src/openai/openai.service';
import { Config } from 'config';

@Module({
  imports: [ScheduleModule.forRoot(), UserModule, OpenAIModule],
  controllers: [JobController],
  providers: [
    JobService,
    JobRepository,
    JobsFetchService,
    UserRecommendedJobsService,
    UserJobsRepository,
    UserRepository,
    OpenAIService,
    Config,
  ],
})
export class JobModule {}
