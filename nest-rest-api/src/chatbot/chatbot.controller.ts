import { Controller, Get, Query } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('chatbot')
export class ChatbotController {
  constructor(private chatbotService: ChatbotService) {}

  @ApiTags('openai')
  @Get('message')
  async sendMessage(@Query('message') message: string) {
    const response =
      await this.chatbotService.returnJobBasedOnUserRequest(message);
    return { response };
  }
}
