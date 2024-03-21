import { Module } from '@nestjs/common';
import { CoverLetterController } from './coverletter.controller';
import { CoverLetterService } from './coverletter.service';
import { OpenAIService } from 'src/openai/openai.service';
import { UserModule } from 'src/user/user.module';
import { OpenAIModule } from 'src/openai/openai.module';
import { CoverLetterRepository } from './coverletter.repository';
import { JobModule } from 'src/job/job.module';
import { JobService } from 'src/job/job.service';
import { JobRepository } from 'src/job/job.repository';
import { WizardService } from 'src/wizard/wizard.service';
import { WizardRepository } from 'src/wizard/wizard.repository';
@Module({
  imports: [UserModule, OpenAIModule, JobModule],
  controllers: [CoverLetterController],
  providers: [
    CoverLetterService,
    OpenAIService,
    CoverLetterRepository,
    JobService,
    JobRepository,
    WizardService,
    WizardRepository,
  ],
})
export class CoverLetterModule {}
