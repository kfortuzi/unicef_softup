import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { AskAssistantDto } from './dto/ask-assistant.dto';

@Controller('chatbot')
export class ChatbotController {
  constructor(private chatbotService: ChatbotService) {}

  @ApiBearerAuth()
  @ApiTags('chatbot')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: AskAssistantDto })
  @ApiCreatedResponse({
    description: 'Main chatbot is ON!',
  })
  @Post('assistant')
  async sendMessageAssistant(
    @Request() req: RequestWithUser,
    @Body() body: AskAssistantDto,
  ) {
    return await this.chatbotService.assistant(req.user.id, body);
  }

  @Post('helper')
  async helper() {
    return await this.chatbotService.completeChatbotFineTunign();
  }
}
