import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResumeGeneratorService } from '../resume/resumeGenerator.service';

@Controller('resume')
export class ResumeController {
  constructor(private ResumeService: ResumeGeneratorService) {}

  @ApiTags('resume')
  @Get('generate-resume')
  async handleResumeGeneration(@Query('message') message: string) {
    return this.ResumeService.handleResumeGeneration(message);
  }
}
