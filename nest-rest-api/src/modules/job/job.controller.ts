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
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request';
import { JobTipsDto } from './dto/job-tips.dto';
import { JobsFetchService } from './jobFetch.service';
import { JobListDTO } from './dto/job-list.dto';

@Controller('jobs')
export class JobController {
  constructor(
    private readonly jobService: JobService,
    private readonly jobFetchService: JobsFetchService,
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
  @ApiQuery({
    name: 'filter',
    required: false,
    type: String,
    description: 'Filter for jobs',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  findJobs(
    @Query('take') take: string,
    @Query('cursor') cursor?: string,
    @Query('filter') filter?: string,
  ) {
    if (filter) {
      return this.jobService.getJobsByFilter(filter);
    }
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
    type: JobTipsDto,
    description: 'Jobs details retrieved successfully',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Post(':id/tips-and-advices')
  async getTipsAndInterviewQuestions(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
  ) {
    return this.jobService.getTipsAndInterviewQuestions(id, req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('jobs')
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: JobListDTO,
    description: 'List of featured jobs from AKPA',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Get('featured/akpa')
  async getAkpaFeaturedJobs() {
    return this.jobFetchService.fetchAndSaveJobForTestingPurpose();
  }
}
