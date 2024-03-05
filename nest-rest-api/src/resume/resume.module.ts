import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeGeneratorService } from './resumeGenerator.service';
import { OpenAIService } from 'src/openai/openai.service';
@Module({
  controllers: [ResumeController],
  providers: [ResumeGeneratorService, OpenAIService],
})
export class ResumeModule {}
