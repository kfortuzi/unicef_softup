import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  Delete,
  Patch,
  Res,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CoverLetterService } from './coverletter.service';
import { CoverLetterWizardDto } from './dto/cover-letter-wizard.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { CoverLetterDto } from './dto/cover-letter-dto';
import { MessageDto } from 'src/modules/chatbot/dto/message.dto';
import { Response } from 'express';
import { AutoGenerateCoverLetterDto } from './dto/cover-letter-autogenerate.dto';

@Controller('cover-letters')
export class CoverLetterController {
  constructor(private coverLetter: CoverLetterService) {}

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({ type: CoverLetterDto })
  @ApiCreatedResponse({
    description: 'The cover letter has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  createCoverLetter(
    @Request() req: RequestWithUser,
    @Body() CoverLetterDto: CoverLetterDto,
  ) {
    return this.coverLetter.createCoverLetter(req.user.id, CoverLetterDto);
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @Post('wizard')
  @ApiBody({ type: CoverLetterWizardDto })
  @ApiCreatedResponse({
    description: 'The cover letter has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  coverLetterWizard(
    @Request() req: RequestWithUser,
    @Body() coverLetterWizardDto: CoverLetterWizardDto,
  ) {
    return this.coverLetter.generateCoverLetterFromWizard(
      req.user.id,
      coverLetterWizardDto,
    );
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @Post('for-job/:jobId')
  @ApiCreatedResponse({
    description: 'The cover letter has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  coverLetterJobPost(
    @Request() req: RequestWithUser,
    @Param('jobId') jobId: string,
  ) {
    return this.coverLetter.generateCoverLetterFromJobPost(req.user.id, jobId);
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Return user resumes.',
    type: CoverLetterDto,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async getAllCoverLetters(@Request() req: RequestWithUser) {
    return this.coverLetter.findAllCoverLetters(req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Return resume.',
    type: CoverLetterDto,
  })
  @Get(':id')
  async getCoverLetterById(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
  ) {
    return this.coverLetter.findCoverLetterById(id, req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateCoverLetter(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
    @Body() coverLetterDto: CoverLetterDto,
  ) {
    return this.coverLetter.updateCoverLetter(id, req.user.id, coverLetterDto);
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteCoverLetter(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
  ) {
    return this.coverLetter.deleteCoverLetter(id, req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: MessageDto })
  @ApiCreatedResponse({
    description: 'Cover letter wizard is ON!',
  })
  @Post('ask-wizard')
  async askWizardCoverLetter(
    @Request() req: RequestWithUser,
    @Body() body: MessageDto,
    @Res() res: Response,
  ) {
    return res.json(
      await this.coverLetter.askWizardCoverLetter(req.user.id, body),
    );
  }

  @ApiBearerAuth()
  @ApiTags('cover-letters')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: MessageDto })
  @ApiCreatedResponse({
    description: 'Cover letter wizard is ON!',
  })
  @Post('autogenerate')
  async autogenerateCoverLetter(
    @Request() req: RequestWithUser,
    @Body() body: AutoGenerateCoverLetterDto,
    @Res() res: Response,
  ) {
    return res.json(
      await this.coverLetter.autogenerateCoverLetter(req.user.id, body),
    );
  }
}
