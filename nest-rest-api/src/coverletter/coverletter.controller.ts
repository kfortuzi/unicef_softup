import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CoverLetterService } from './coverletter.service';
import { CoverLetterWizardDTO } from './dto/cover-letter-wizard.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { JobSummaryDTO } from 'src/job/dto/job-summary.dto';

@Controller('cover-letter')
export class CoverLetterController {
  constructor(private CoverLetter: CoverLetterService) {}

  @ApiBearerAuth()
  @ApiTags('cover-letter')
  @UseGuards(JwtAuthGuard)
  @Post('wizard')
  @ApiBody({ type: CoverLetterWizardDTO })
  @ApiCreatedResponse({
    description: 'The cover letter has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  coverLetterWizard(
    @Request() req: RequestWithUser,
    @Body() CoverLetterWizardDTO: CoverLetterWizardDTO,
  ) {
    return this.CoverLetter.generateCoverLetterFromWizard(
      req.user.id,
      CoverLetterWizardDTO,
    );
  }

  @ApiBearerAuth()
  @ApiTags('cover-letter')
  @UseGuards(JwtAuthGuard)
  @Post('for-job')
  @ApiBody({ type: JobSummaryDTO })
  @ApiCreatedResponse({
    description: 'The cover letter has been successfully created.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  coverLetterJobPost(
    @Request() req: RequestWithUser,
    @Body() JobPost: JobSummaryDTO,
  ) {
    return this.CoverLetter.generateCoverLetterFromJobPost(
      req.user.id,
      JobPost,
    );
  }
}
