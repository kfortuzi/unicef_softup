import {
  Controller,
  Get,
  Query,
  UseGuards,
  Request,
  Post,
  Param,
} from '@nestjs/common';
import { JobService } from './job.service';
import { UserRecommendedJobsService } from './userJobs.service';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
  ApiQuery,
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
  @ApiQuery({
    name: 'take',
    required: true,
    type: String,
    description: 'Number of jobs to take',
  })
  @ApiQuery({
    name: 'cursor',
    required: false,
    type: String,
    description: 'Cursor for pagination',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  findJobs(@Query('take') take: string, @Query('cursor') cursor?: string) {
    return this.jobService.getJobs(take, cursor);
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
  async getJobDetails(@Param('id') id: string) {
    return this.jobService.getJobDetails(id);
  }

  @ApiBearerAuth()
  @ApiTags('jobs')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    description: 'Jobs details retrieved successfully',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Post('tips-and-advices')
  async getTipsAndInterviewQuestions(
    @Query('title') title: string,
    @Request() req: RequestWithUser,
  ) {
    return this.jobService.getTipsAndInterviewQuestions(title, req.user.id);
  }
}
