import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { OpenAIService } from 'src/openai/openai.service';
import { OpenAIModule } from 'src/openai/openai.module';
import { Config } from 'config';

@Module({
  imports: [OpenAIModule],
  controllers: [ChatbotController],
  providers: [ChatbotService, OpenAIService, Config],
})
export class ChatbotModule {}
