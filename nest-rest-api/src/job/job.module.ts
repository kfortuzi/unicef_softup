import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobRepository } from './job.repository';

@Module({
  controllers: [JobController],
  providers: [JobService, JobRepository],
})
export class JobsModule {}
