import { Module } from '@nestjs/common';

import { ChatbotHistoryService } from './chatbotHistory.service';
import { ChatbotHistoryRepository } from './chatbotHistory.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatbotHistoryService, ChatbotHistoryRepository],
  exports: [ChatbotHistoryService],
})
export class ChatbotHistoryModule {}
