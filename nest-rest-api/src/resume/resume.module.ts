import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { OpenAIService } from 'src/openai/openai.service';
import { OpenAIModule } from 'src/openai/openai.module';
import { ResumeRepository } from './resume.repository';
import { UserModule } from 'src/user/user.module';
import { JobModule } from 'src/job/job.module';
import { JobService } from 'src/job/job.service';
import { JobRepository } from 'src/job/job.repository';
@Module({
  imports: [OpenAIModule, UserModule, JobModule],
  controllers: [ResumeController],
  providers: [
    ResumeService,
    OpenAIService,
    ResumeRepository,
    JobService,
    JobRepository,
  ],
})
export class ResumeModule {}
