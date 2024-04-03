import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { OpenAIService } from 'src/modules/openai/openai.service';
import { OpenAIModule } from 'src/modules/openai/openai.module';
import { Config } from 'config';
import { JobModule } from 'src/modules/job/job.module';

@Module({
  imports: [OpenAIModule, JobModule],
  controllers: [ChatbotController],
  providers: [ChatbotService, OpenAIService, Config],
})
export class ChatbotModule {}
