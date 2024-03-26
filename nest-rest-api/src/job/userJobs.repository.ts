import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';

@Injectable()
export class UserJobsRepository {
  constructor(private prisma: PrismaService) {}

  async createUserRecommendedJob(userId: string, jobId: string) {
    return this.prisma.user_recommended_jobs.create({
      data: {
        userId,
        jobId,
      },
    });
  }

  async findJobsByUserId(userId: string) {
    return this.prisma.user_recommended_jobs.findMany({
      where: { userId },
    });
  }

  async findJobsByUser(userId: string) {
    return this.prisma.user_recommended_jobs.findMany({
      where: {
        job: {
          isUnvailable: false,
        },
        userId: userId,
      },
      include: {
        job: true,
      },
    });
  }
}
