import { Module } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { PromptRepository } from './prompt.repository';
import { Config } from 'config';
@Module({
  controllers: [],
  providers: [OpenAIService, PromptRepository, Config],
  exports: [OpenAIService, PromptRepository],
})
export class OpenAIModule {}
