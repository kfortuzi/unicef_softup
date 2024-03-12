import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
  async handleResumeGeneration(@Body() body: string) {
    return this.ResumeService.handleResumeGeneration(body);
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
  async generateSummary(@Body() experieneces: ExperieneceDTO[]) {
    return this.ResumeService.generateSummary(experieneces);
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
  async generateResponsibility(@Body() experieneces: ExperieneceDTO) {
    return this.ResumeService.generateResponsibility(experieneces);
  }
}
