import { Injectable } from '@nestjs/common';
import { OpenAI, ClientOptions } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from './models';
import { PromptRepository } from './prompt.repository';
import { PromptType } from './dto/promptTypes';
import { Config } from 'config';

@Injectable()
export class OpenAIService {
  private openAI;
  constructor(
    private promptRepository: PromptRepository,
    private config: Config,
  ) {
    const configuration: ClientOptions = {
      apiKey: this.config.openAiApiKey,
    };
    this.openAI = new OpenAI(configuration);
  }

  async generateCompletion(
    userPrompt: ChatCompletionMessageParam[],
    models: AkpaModels,
    userId: string,
    promptType: PromptType,
  ) {
    try {
      const startTime = new Date();
      const response = await this.generateOpenAI(userPrompt, models);
      const endDate = new Date();
      this.promptRepository.create({
        promptType: promptType,
        requireHistory: false,
        promptRequest: JSON.stringify(userPrompt),
        prompResponse: JSON.stringify(response.message),
        startedAt: startTime,
        endedAt: endDate,
        user: {
          connect: { id: userId },
        },
      });
      return response.message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to generate text from OpenAI');
    }
  }

  async generateOpenAI(
    userPrompt: ChatCompletionMessageParam[],
    models: AkpaModels,
  ) {
    try {
      const response = await this.openAI.chat.completions.create({
        model: models,
        messages: userPrompt,
        temperature: 0.2,
      });
      return response.choices[0];
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to generate text from OpenAI');
    }
  }

  prepareMessageForAIValidation(
    prompts: string,
    inputObject: any,
    inputString?: string,
  ): string {
    let message = '';
    if (inputString) {
      message = inputString;
    }
    message += `. ${JSON.stringify(inputObject)} . ${prompts}`;
    return JSON.stringify(message);
  }
}
