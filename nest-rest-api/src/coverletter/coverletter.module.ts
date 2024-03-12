import { Module } from '@nestjs/common';
import { CoverLetterController } from './coverletter.controller';
import { CoverLetterService } from './coverletter.service';
import { OpenAIService } from 'src/openai/openai.service';
import { UserModule } from 'src/user/user.module';
import { OpenAIModule } from 'src/openai/openai.module';
@Module({
  imports: [UserModule, OpenAIModule],
  controllers: [CoverLetterController],
  providers: [CoverLetterService, OpenAIService],
})
export class CoverLetterModule {}
