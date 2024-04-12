import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { MessageDto } from './dto/message.dto';

@Controller('chatbot')
export class ChatbotController {
  constructor(private chatbotService: ChatbotService) {}

  @ApiBearerAuth()
  @ApiTags('chatbot')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: MessageDto })
  @ApiCreatedResponse({
    description: 'Main chatbot is ON!',
  })
  @Post()
  async sendMessage(@Request() req: RequestWithUser, @Body() body: MessageDto) {
    await this.chatbotService.chatbot(req.user.id, body.message);
  }
}
