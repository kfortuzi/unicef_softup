import { Module } from '@nestjs/common';
import { CoverLetterController } from './coverletter.controller';
import { CoverLetterService } from './coverletter.service';
import { OpenAIService } from 'src/modules/openai/openai.service';
import { UserModule } from 'src/modules/user/user.module';
import { OpenAIModule } from 'src/modules/openai/openai.module';
import { CoverLetterRepository } from './coverletter.repository';
import { JobModule } from 'src/modules/job/job.module';
import { JobService } from 'src/modules/job/job.service';
import { JobRepository } from 'src/modules/job/job.repository';
import { WizardService } from 'src/modules/wizard/wizard.service';
import { WizardRepository } from 'src/modules/wizard/wizard.repository';
import { Config } from 'config';
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
    Config,
  ],
})
export class CoverLetterModule {}
