import { Module } from '@nestjs/common';

import { Config } from 'config';
import { OpenAIService } from 'src/modules/openai/openai.service';
import { OpenAIModule } from 'src/modules/openai/openai.module';
import { JobModule } from 'src/modules/job/job.module';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { ChatbotAIService } from './chatbot.ai.service';
import { ChatbotHistoryModule } from '../chatbotHistory/chatbotHistory.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [OpenAIModule, JobModule, UserModule, ChatbotHistoryModule],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotAIService, OpenAIService, Config],
})
export class ChatbotModule {}
