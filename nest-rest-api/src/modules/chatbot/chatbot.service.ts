import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
import { AkpaPrompts } from '../openai/promptContent';
import { HelperService } from 'src/modules/openai/openai.helper';
import { PromptType } from '../openai/promptTypes';
import { JobService } from 'src/modules/job/job.service';
import { AkpaModels } from '../openai/models';

@Injectable()
export class ChatbotService {
  constructor(
    private openAIService: OpenAIService,
    private helper: HelperService,
    private jobService: JobService,
  ) {}

  async chatbot(userId: string, userRequest: string): Promise<string | null> {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.chatbot,
        },
        {
          role: 'user',
          content: userRequest,
        },
      ];
      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.MAIN_CHAT,
      };

      return this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.MainChat,
      );
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
      //TODO: Return some general response from the chatbot
    }
  }

  async assistant(userId: string, userRequest: string) {
    try {
      const getJobTitle = {
        name: 'getJobTitle',
        description:
          'Extract job title from the user input, if not a job title answer server as a job assistant',
        parameters: {
          type: 'object',
          properties: {
            jobTitle: {
              type: 'string',
              description: 'Job title in albanian language',
            },
          },
          required: ['jobTitle'],
        },
      };

      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.chatbot,
        },
        {
          role: 'user',
          content: userRequest,
        },
      ];

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.MAIN_CHAT,
        functions: [getJobTitle],
        function_call: 'auto',
      };

      const response = await this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.MainChat,
      );

      if (response?.charAt(0) === '{') {
        const job: { jobTitle: string } = JSON.parse(response);
        const { jobTitle } = job;

        const jobAnswer = await this.jobService.getLatestJobsByTitle(jobTitle);
        return { message: jobAnswer };
      }

      return { message: response };

      // check response if it returns fuc callling
      // if not jus return the assistant msg
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
    }
  }

  async completeChatbotFineTunign() {
    return this.helper.loopProfiles();
  }
}
