import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { ChatbotHistoryRepository } from './chatbotHistory.repository';

@Injectable()
export class ChatbotHistoryService {
  constructor(private chatbotRepository: ChatbotHistoryRepository) {}

  public async createHistoryDialog(
    data:
      | Prisma.chatbot_historyUncheckedCreateInput
      | Prisma.chatbot_historyCreateInput,
  ) {
    return this.chatbotRepository.createHistoryDialog(data);
  }

  public async findLastConversationHistoryPerUser(userId: string) {
    return this.chatbotRepository.findLastConversationHistoryPerUser(userId);
  }
}
