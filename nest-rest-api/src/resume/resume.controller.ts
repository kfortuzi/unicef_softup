import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Delete,
  Param,
  Patch,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResumeService } from './resume.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { ExperienceDto, ResumeDto } from './dto/resume.dto';
import { ResumeWizardDto } from './dto/resume-wizard.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MessageDto } from 'src/chatbot/dto/message.dto';
import { Response } from 'express';

@Controller('resumes')
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({ type: ResumeDto })
  @ApiCreatedResponse({
    description: 'The resume has been successfully created.',
  })
  async handleResumeGeneration(
    @Request() req: RequestWithUser,
    @Body() createResumeDto: ResumeDto,
  ) {
    return this.resumeService.createResume(req.user.id, createResumeDto);
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Resume created sucessfully from question wizard.',
    type: ResumeDto,
  })
  @ApiBody({ type: ResumeWizardDto })
  @Post('wizard')
  async createResumeFromWizard(
    @Request() req: RequestWithUser,
    @Body() createResumeDto: ResumeWizardDto,
  ) {
    return this.resumeService.resumeGenerationFromWizard(
      req.user.id,
      createResumeDto,
    );
  }
  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Resume created sucessfully from job tailor.',
    type: ResumeDto,
  })
  @Post('for-job/:jobId')
  async createResumeFromJob(
    @Request() req: RequestWithUser,
    @Param('jobId') jobId: string,
  ) {
    return this.resumeService.resumeGenerationFromJob(req.user.id, jobId);
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Return user resumes.',
    type: ResumeDto,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async getAllResumes(@Request() req: RequestWithUser) {
    return this.resumeService.findAllResumes(req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'Return resume.',
    type: ResumeDto,
  })
  @Get(':id')
  async getResumeById(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
  ) {
    return this.resumeService.findResumeById(id, req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @Post('summary')
  @ApiBody({ type: [ExperienceDto] })
  @ApiCreatedResponse({
    description: 'The summary has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async generateSummary(
    @Request() req: RequestWithUser,
    @Body() experiences: ExperienceDto[],
    @Res() res: Response,
  ) {
    return res.json(
      await this.resumeService.generateSummary(req.user.id, experiences),
    );
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @Post('responsibility')
  @ApiBody({ type: [ExperienceDto] })
  @ApiCreatedResponse({
    description: 'The responsibilities have been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async generateResponsibility(
    @Request() req: RequestWithUser,
    @Body() experiences: string,
    @Res() res: Response,
  ) {
    return res.json(
      await this.resumeService.generateResponsibility(req.user.id, experiences),
    );
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateResume(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
    @Body() updateResumeDto: ResumeDto,
  ) {
    return this.resumeService.updateResume(id, req.user.id, updateResumeDto);
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteResume(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.resumeService.deleteResume(id, req.user.id);
  }

  @ApiBearerAuth()
  @Post(':id/upload-photo')
  @UseGuards(JwtAuthGuard)
  @ApiTags('resumes')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Request() req: RequestWithUser,
    @Res() res: Response,
  ) {
    return res.json(
      this.resumeService.uploadResumePicture(file, id, req.user.id),
    );
  }

  @ApiBearerAuth()
  @ApiTags('resumes')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: MessageDto })
  @ApiCreatedResponse({
    description: 'Resume wizard is ON!',
  })
  @Post('ask-wizard')
  async askWizardResume(
    @Request() req: RequestWithUser,
    @Body() body: MessageDto,
    @Res() res: Response,
  ) {
    return res.json(
      await this.resumeService.askWizardResume(req.user.id, body.message),
    );
  }
}
