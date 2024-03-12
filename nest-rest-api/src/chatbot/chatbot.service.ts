import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaPrompts } from '../openai/promptContent';
import { AkpaModels } from '../openai/models';

@Injectable()
export class ChatbotService {
  constructor(private openAIService: OpenAIService) {}

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
      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.MAIN_CHAT,
        userId,
        'MainChat',
      );
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to generate text from OpenAI');
    }
  }
}
