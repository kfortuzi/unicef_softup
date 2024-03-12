import { Module } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { PromptRepository } from './prompt.repository';
@Module({
  controllers: [],
  providers: [OpenAIService, PromptRepository],
  exports: [OpenAIService, PromptRepository],
})
export class OpenAIModule {}
