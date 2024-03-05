import { Module } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
@Module({
  controllers: [],
  providers: [OpenAIService],
})
export class OpenAIModule {}
