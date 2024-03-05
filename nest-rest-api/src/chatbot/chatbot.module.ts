import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { OpenAIService } from 'src/openai/openai.service';

@Module({
  controllers: [ChatbotController],
  providers: [ChatbotService, OpenAIService],
})
export class ChatbotModule {}
