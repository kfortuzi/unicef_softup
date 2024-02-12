import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private chatbotService: ChatbotService) {}

  @Post('message')
  async sendMessage(@Body('message') message: string) {
    const response = await this.chatbotService.sendMessage(message);
    return { response };
  }
}
