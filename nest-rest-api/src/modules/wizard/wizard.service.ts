import { Injectable } from '@nestjs/common';
import { WizardRepository } from './wizard.repository';
import { ResumeWizardDto } from 'src/modules/resume/dto/resume-wizard.dto';
import { CoverLetterWizardDto } from 'src/modules/coverletter/dto/cover-letter-wizard.dto';
import { SourceType } from '@prisma/client';

@Injectable()
export class WizardService {
  constructor(private wizardRepository: WizardRepository) {}

  async saveWizardAnswers(
    userInput: ResumeWizardDto | CoverLetterWizardDto,
    userId: string,
    sourceType: SourceType,
  ) {
    return this.wizardRepository.saveUserAnswers({
      text: userInput ? JSON.stringify(userInput) : '',
      source: sourceType,
      user: {
        connect: { id: userId },
      },
    });
  }
}
