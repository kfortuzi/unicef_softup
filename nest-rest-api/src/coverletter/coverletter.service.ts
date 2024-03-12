import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { CoverLetterWizardDTO } from './dto/cover-letter-wizard.dto';
import { UserService } from 'src/user/user.service';
import { JobSummaryDTO } from 'src/job/dto/job-summary.dto';

@Injectable()
export class CoverLetterService {
  constructor(
    private openAIService: OpenAIService,
    private userService: UserService,
  ) {}

  async generateCoverLetterFromWizard(
    userId: string,
    wizard: CoverLetterWizardDTO,
  ) {
    try {
      const data = await this.validateAndParseUserInput(userId, wizard);
      this.assertValidResponse(data);
      return this.generateCoverLetter(userId, wizard);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async generateCoverLetterFromJobPost(userId: string, jobPost: JobSummaryDTO) {
    try {
      return this.generateCoverLetter(userId, jobPost);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async validateQuestionWizard(
    userId: string,
    wizard: any,
  ): Promise<string | null> {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.coverLetterValidatePrompt,
      },
      {
        role: 'user',
        content: `Here is the user answeres \n ${JSON.stringify(wizard)} \n ${
          AkpaPrompts.coverLetterValidateUserPrompt
        } `,
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'ValidateCoverLetter',
    );
  }

  private async validateAndParseUserInput(
    userId: string,
    wizard: CoverLetterWizardDTO,
  ): Promise<string> {
    try {
      const filteredWizard = Object.entries(wizard).reduce(
        (acc, [key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            (acc as any)[key] = value;
          }
          return acc;
        },
        {} as Partial<CoverLetterWizardDTO>,
      );
      const validatedResponse = await this.validateQuestionWizard(
        userId,
        filteredWizard,
      );
      if (!validatedResponse) {
        throw new Error('No data to process');
      }
      return JSON.parse(validatedResponse);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async generateCoverLetter(
    userId: string,
    input: JobSummaryDTO | CoverLetterWizardDTO,
  ): Promise<string | null> {
    const userInput = this.userService.getUserSkillsAsString(userId);
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.generateCoverLetterPrompt,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          AkpaPrompts.generateCoverLetter,
          userInput,
          input,
        ),
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.COVER_LETTER,
      userId,
      'CoverLetterWizard',
    );
  }

  private assertValidResponse(
    response: { [key: string]: boolean } | string,
  ): void {
    const errorMessage = Object.entries(response)
      .filter(([isValid]) => !isValid)
      .map(([key]) => `${key} does not meet the required criteria`)
      .join('; ');
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }
}
