import { Injectable } from '@nestjs/common';

import { HelperService } from 'src/modules/openai/openai.helper';
import { ChatbotAIService } from './chatbot.ai.service';
import { AskAssistantDto } from './dto/ask-assistant.dto';
import { ChatbotHistoryService } from '../chatbotHistory/chatbotHistory.service';
import { UserService } from '../user/user.service';

@Injectable()
export class ChatbotService {
  constructor(
    private helper: HelperService,
    private chatbotHistoryService: ChatbotHistoryService,
    private chatbotAIService: ChatbotAIService,
    private userService: UserService,
  ) {}

  async assistant(userId: string, body: AskAssistantDto) {
    const { firstChatbotConversationMessage, message: question } = body;

    const chatHistory = firstChatbotConversationMessage
      ? null
      : await this.chatbotAIService.generateChatHistorySummary(userId);

    const response = await this.chatbotAIService.askAssistant(
      question,
      chatHistory,
    );

    await this.chatbotHistoryService.createHistoryDialog({
      question,
      answer: response,
      firstConversationMessage: firstChatbotConversationMessage,
      userId,
    });

    return { message: response };
  }

  async completeChatbotFineTunign() {
    return this.helper.loopProfiles();
  }
}
