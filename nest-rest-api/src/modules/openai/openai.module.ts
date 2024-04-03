import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { PromptRepository } from './prompt.repository';
import { HelperService } from './openai.helper';
import { Config } from 'config';

@Module({
  controllers: [],
  providers: [OpenAIService, PromptRepository, HelperService, Config],
  exports: [OpenAIService, PromptRepository, HelperService],
})
export class OpenAIModule {}
