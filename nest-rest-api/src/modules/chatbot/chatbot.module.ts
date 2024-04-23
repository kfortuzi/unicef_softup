import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { OpenAIService } from 'src/modules/openai/openai.service';
import { OpenAIModule } from 'src/modules/openai/openai.module';
import { Config } from 'config';
import { JobModule } from 'src/modules/job/job.module';
import { UserModule } from '../user/user.module';
import { ChatbotHelper } from './chatbot.helper';

@Module({
  imports: [OpenAIModule, JobModule, UserModule],
  controllers: [ChatbotController],
  providers: [ChatbotService, OpenAIService, Config, ChatbotHelper],
})
export class ChatbotModule {}
