import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import {
  ChatCompletion,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';

@Injectable()
export class ResumeGeneratorService {
  constructor(private openAIService: OpenAIService) {}

  async handleResumeGeneration(
    userpInput: string,
  ): Promise<ChatCompletion.Choice | undefined> {
    try {
      const validatedJson = await this.validateQuestionWizard(userpInput);

      if (validatedJson.message.content) {
        const data = JSON.parse(validatedJson.message.content);
        const isValidResponese = this.evaluateResponse(data);
        if (isValidResponese) {
          return this.generateResumeJson(userpInput);
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
        content: AkpaPrompts.validatePrompt,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          userInput,
          AkpaPrompts.validateUserPrompt,
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
}
