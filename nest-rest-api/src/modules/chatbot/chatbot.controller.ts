import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { AskAssistantDto } from './dto/ask-assistant.dto';
import { ChatbotService } from './chatbot.service';
import { Response } from 'express';

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
    @Res() res: Response,
  ) {
    return await this.chatbotService.assistant(req.user.id, body, res);
  }
}
