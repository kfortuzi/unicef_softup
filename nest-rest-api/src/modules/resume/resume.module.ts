import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { OpenAIService } from 'src/modules/openai/openai.service';
import { OpenAIModule } from 'src/modules/openai/openai.module';
import { ResumeRepository } from './resume.repository';
import { UserModule } from 'src/modules/user/user.module';
import { JobModule } from 'src/modules/job/job.module';
import { JobService } from 'src/modules/job/job.service';
import { JobRepository } from 'src/modules/job/job.repository';
import { WizardModule } from 'src/modules/wizard/wizard.module';
import { WizardService } from 'src/modules/wizard/wizard.service';
import { WizardRepository } from 'src/modules/wizard/wizard.repository';
import { S3Module } from 'src/modules/s3/s3.module';
import { S3Service } from 'src/modules/s3/s3.service';
import { Config } from 'config';
@Module({
  imports: [OpenAIModule, UserModule, JobModule, WizardModule, S3Module],
  controllers: [ResumeController],
  providers: [
    ResumeService,
    OpenAIService,
    ResumeRepository,
    JobService,
    JobRepository,
    WizardService,
    WizardRepository,
    S3Service,
    Config,
  ],
})
export class ResumeModule {}
