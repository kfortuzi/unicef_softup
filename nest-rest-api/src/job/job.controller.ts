import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { JobService } from './job.service';
import { UserRecommendedJobsService } from './userJobs.service';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';

@Controller('jobs')
export class JobController {
  constructor(
    private readonly jobService: JobService,
    private readonly userJobs: UserRecommendedJobsService,
  ) {}

  @ApiBearerAuth()
  @ApiTags('jobs')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    description: 'Jobs retrieved successfully',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  findJobs(@Query('cursor') cursor: string, @Query('take') take: string) {
    return this.jobService.getJobs(cursor, take);
  }

  @ApiBearerAuth()
  @ApiTags('jobs')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    description: 'User Jobs retrieved successfully',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get('user-recommended-jobs')
  async getUserJobs(@Request() req: RequestWithUser) {
    return this.userJobs.getRecommendedJobsForUser(req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('jobs')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    description: 'Jobs details retrieved successfully',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get('/:id')
  async getJobDetails(@Query('id') id: string) {
    return this.jobService.getJobDetails(id);
  }
}
