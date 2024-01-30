import { Controller, Get, Query } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  findJobs(
    @Query('cursor') cursor?: string,
    @Query('take') take?: number
  ) {
    return this.jobService.findJobs(cursor, take);
  }

  @Get('latest-jobs')
  async getLatestJobsByTitle(@Query('title') title: string): Promise<string> {
    return this.jobService.getLatestJobsByTitle(title);
  }
}
