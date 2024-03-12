import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { ExperieneceDTO } from './dto/experience.dto';

@Injectable()
export class ResumeGeneratorService {
  constructor(private openAIService: OpenAIService) {}

  async handleResumeGeneration(
    userId: string,
    userInput: string,
  ): Promise<string | null | undefined> {
    try {
      const validatedJson = await this.validateQuestionWizard(
        userId,
        userInput,
      );

      if (validatedJson) {
        const data = JSON.parse(validatedJson);
        const isValidResponese = this.evaluateResponse(data);
        if (isValidResponese) {
          return this.generateResumeJson(userId, userInput);
        }
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async validateQuestionWizard(
    userId: string,
    userInput: string,
  ): Promise<string | null> {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.resumeValidatePrompt,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          userInput,
          AkpaPrompts.resumeValidateUserPrompt,
        ),
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.IS_VALID_ANSWER,
      userId,
      'ValidateResume',
    );
  }

  async generateResumeJson(
    userId: string,
    userInput: string,
  ): Promise<string | null> {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.generateResume,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          userInput,
          AkpaPrompts.generateUserPrompt,
        ),
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'ResumeWizard',
    );
  }

  private evaluateResponse(response: { [key: string]: boolean }): boolean {
    if (response) {
      return this.checkUserResponses(response);
    } else {
      throw new Error('Invalid response structure.');
    }
  }

  private checkUserResponses(criteria: { [key: string]: boolean }): boolean {
    let errorMessage = '';
    for (const [key, value] of Object.entries(criteria)) {
      if (!value) {
        errorMessage += ` ${key} does not meet the required criteria;`;
      }
    }
    if (errorMessage) {
      throw new Error(errorMessage.trim());
    }
    return true;
  }

  async generateSummary(
    userId: string,
    userInput: string | ExperieneceDTO[],
  ): Promise<string | null> {
    try {
      const yearsOfExperience = await this.calculateYearsOfExperience(
        userId,
        userInput,
      );
      let systemPrompt: string = AkpaPrompts.generateSummaryWithoutExperience;
      if (yearsOfExperience > 0) {
        systemPrompt = `${AkpaPrompts.generateSummary}. ${yearsOfExperience}`;
      }
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: `${JSON.stringify(userInput)}`,
        },
      ];
      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.CHAT,
        userId,
        'Summary',
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async calculateYearsOfExperience(
    userId: string,
    userInput: string | ExperieneceDTO[],
  ): Promise<number> {
    let yearsOfExperience = 0;
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.calculateYearsOfExperience,
      },
      {
        role: 'user',
        content: `${JSON.stringify(userInput)}`,
      },
    ];
    const response = await this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'YearsOfExperience',
    );
    if (response) {
      yearsOfExperience = JSON.parse(response).Total;
    }
    return yearsOfExperience;
  }

  async generateResponsibility(
    userId: string,
    userInput: string | ExperieneceDTO,
  ): Promise<string | null> {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.generateResponsibility,
        },
        {
          role: 'user',
          content: `${JSON.stringify(userInput)}`,
        },
      ];

      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.CHAT,
        userId,
        'Responsibility',
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
