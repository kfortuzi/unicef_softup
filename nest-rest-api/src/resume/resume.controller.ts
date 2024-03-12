import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResumeGeneratorService } from '../resume/resumeGenerator.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ExperieneceDTO } from './dto/experience.dto';
import { RequestWithUser } from 'src/types/request';

@Controller('resume')
export class ResumeController {
  constructor(private ResumeService: ResumeGeneratorService) {}

  @ApiBearerAuth()
  @ApiTags('resume')
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({
    schema: {
      type: 'string',
    },
  })
  @ApiCreatedResponse({
    description: 'The resume has been successfully created.',
  })
  async handleResumeGeneration(
    @Request() req: RequestWithUser,
    @Body() body: string,
  ) {
    return this.ResumeService.handleResumeGeneration(req.user.id, body);
  }

  @ApiBearerAuth()
  @ApiTags('resume')
  @UseGuards(JwtAuthGuard)
  @Post('summary')
  @ApiBody({ type: [ExperieneceDTO] })
  @ApiCreatedResponse({
    description: 'The summary has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async generateSummary(
    @Request() req: RequestWithUser,
    @Body() experieneces: ExperieneceDTO[],
  ) {
    return this.ResumeService.generateSummary(req.user.id, experieneces);
  }
  @ApiBearerAuth()
  @ApiTags('resume')
  @UseGuards(JwtAuthGuard)
  @Post('responsibility')
  @ApiBody({ type: ExperieneceDTO })
  @ApiCreatedResponse({
    description: 'The responsibilities have been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  async generateResponsibility(
    @Request() req: RequestWithUser,
    @Body() experieneces: ExperieneceDTO,
  ) {
    return this.ResumeService.generateResponsibility(req.user.id, experieneces);
  }
}
