import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { ChatbotAIService } from './chatbot.ai.service';
import { AskAssistantDto } from './dto/ask-assistant.dto';
import { ChatbotHistoryService } from '../chatbotHistory/chatbotHistory.service';
import { OpenAIService } from '../openai/openai.service';
import { SavePromptData } from '../openai/types';
import { PromptType } from '../openai/promptTypes';
import { UserService } from '../user/user.service';

@Injectable()
export class ChatbotService {
  constructor(
    private chatbotHistoryService: ChatbotHistoryService,
    private chatbotAIService: ChatbotAIService,
    private openAIService: OpenAIService,
    private userService: UserService,
  ) {}

  async assistant(userId: string, body: AskAssistantDto) {
    const { firstChatbotConversationMessage, message: question } = body;
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User does not exist');
    const startDate = new Date();

    const last8HourMessages =
      await this.openAIService.findLastMessagesPer8Hours(
        userId,
        PromptType.MainChat,
      );
    if (last8HourMessages >= 7)
      throw new UnprocessableEntityException(
        'Limit 7 messages per 8 hours reached!',
      );

    const chatHistory = firstChatbotConversationMessage
      ? []
      : await this.chatbotAIService.generateChatHistory(userId);

    const response = await this.chatbotAIService.askAssistant(
      question,
      chatHistory,
    );

    const endDate = new Date();

    const data: SavePromptData = {
      startDate,
      endDate,
      userId,
      promptType: PromptType.MainChat,
      promptRequest: body.message,
      prompResponse: response,
    };

    await this.openAIService.savePrompt(data);

    await this.chatbotHistoryService.createHistoryDialog({
      question,
      answer: response,
      firstConversationMessage: firstChatbotConversationMessage,
      userId,
    });

    return { message: response };
  }
}
