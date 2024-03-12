import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeGeneratorService } from './resumeGenerator.service';
import { OpenAIService } from 'src/openai/openai.service';
import { OpenAIModule } from 'src/openai/openai.module';
@Module({
  imports: [OpenAIModule],
  controllers: [ResumeController],
  providers: [ResumeGeneratorService, OpenAIService],
})
export class ResumeModule {}
