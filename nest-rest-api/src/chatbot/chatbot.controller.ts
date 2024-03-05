import { Controller, Get, Query } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('chatbot')
export class ChatbotController {
  constructor(private chatbotService: ChatbotService) {}

  @ApiTags('openai')
  @Get('return-jobs')
  async sendMessage(@Query('message') message: string) {
    return await this.chatbotService.returnJobBasedOnUserRequest(message);
  }
}
