import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OpenAI, ClientOptions } from 'openai';
import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/chat';
import { PromptRepository } from './prompt.repository';
import { PromptType } from './promptTypes';
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
    body: ChatCompletionCreateParamsNonStreaming,
    userId: string,
    promptType: PromptType,
  ) {
    try {
      const startTime = new Date();
      const response = await this.generateOpenAI(body);
      const endDate = new Date();

      this.promptRepository.create({
        promptType: promptType,
        requireHistory: false,
        promptRequest: JSON.stringify(body.messages),
        prompResponse: JSON.stringify(response.message),
        startedAt: startTime,
        endedAt: endDate,
        user: {
          connect: { id: userId },
        },
      });
      if (
        (response.finish_reason === 'function_call' &&
          response.message.function_call) ||
        response.message.function_call
      ) {
        return response.message.function_call.arguments;
      }

      if (
        response.finish_reason === 'tool_calls' &&
        response.message.tool_calls?.length
      ) {
        return response.message.tool_calls[0].function.arguments;
      }

      return response.message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
    }
  }

  async generateOpenAI(body: ChatCompletionCreateParamsNonStreaming) {
    try {
      const response = await this.openAI.chat.completions.create(body);
      return response.choices[0];
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
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

  getJobTitle(jobTitle: string) {
    return ` omg thsi is a jobbb${jobTitle}`;
  }
}
