import { Injectable } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { prompts } from './promptContent';
import { AkpaModels } from './models';

@Injectable()
export class ChatbotService {
  constructor(private openAIService: OpenAIService) {}

  async returnJobBasedOnUserRequest(userRequest: string) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: prompts,
      },
      {
        role: 'user',
        content: userRequest,
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.MAIN_CHAT,
    );
  }
}
