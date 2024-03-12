import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import {
  ChatCompletion,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { ExperieneceDTO } from './dto/experience.dto';

@Injectable()
export class ResumeGeneratorService {
  constructor(private openAIService: OpenAIService) {}

  async handleResumeGeneration(
    userInput: string,
  ): Promise<ChatCompletion.Choice | undefined> {
    try {
      const validatedJson = await this.validateQuestionWizard(userInput);

      if (validatedJson.message.content) {
        const data = JSON.parse(validatedJson.message.content);
        const isValidResponese = this.evaluateResponse(data);
        if (isValidResponese) {
          return this.generateResumeJson(userInput);
        }
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async validateQuestionWizard(
    userInput: string,
  ): Promise<ChatCompletion.Choice> {
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
    );
  }

  async generateResumeJson(userInput: string): Promise<ChatCompletion.Choice> {
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
    return this.openAIService.generateCompletion(messages, AkpaModels.CHAT);
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
    userInput: string | ExperieneceDTO[],
  ): Promise<ChatCompletion.Choice | undefined> {
    try {
      const yearsOfExperience =
        await this.calculateYearsOfExperience(userInput);
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
      return this.openAIService.generateCompletion(messages, AkpaModels.CHAT);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async calculateYearsOfExperience(
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
    );
    if (response.message.content) {
      yearsOfExperience = JSON.parse(response.message.content).Total;
    }
    return yearsOfExperience;
  }

  async generateResponsibility(
    userInput: string | ExperieneceDTO,
  ): Promise<ChatCompletion.Choice | undefined> {
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

      return this.openAIService.generateCompletion(messages, AkpaModels.CHAT);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
