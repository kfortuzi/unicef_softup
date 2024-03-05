import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaPrompts } from '../openai/promptContent';
import { AkpaModels } from '../openai/models';

@Injectable()
export class ChatbotService {
  constructor(private openAIService: OpenAIService) {}

  async returnJobBasedOnUserRequest(userRequest: string) {
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
    );
  }
}
