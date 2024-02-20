import { Controller, Get, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { JobsFetchService } from './jobFetch.service';
import { Job } from './dto/job.dto';
import { UserRecommendedJobsService } from './userJobs.service';

@Controller('jobs')
export class JobController {
  constructor(
    private readonly jobService: JobService,
    private readonly jobFetch: JobsFetchService,
    private readonly userJobs: UserRecommendedJobsService,
  ) {}

  @Get()
  findJobs(@Query('cursor') cursor?: string, @Query('take') take?: number) {
    return this.jobService.findJobs(cursor, take);
  }

  @Get('latest-jobs')
  async getLatestJobsByTitle(@Query('title') title: string): Promise<string> {
    return this.jobService.getLatestJobsByTitle(title);
  }

  @Get('user-recommended-jobs')
  async getUserJobs(@Query('userId') userId: string) {
    return this.userJobs.getRecommendedJobsForUser(userId);
  }
}
