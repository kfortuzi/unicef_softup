import { Injectable } from '@nestjs/common';
import { jobs } from '@prisma/client';
import { PrismaService } from 'src/commons/prisma/prisma.service';

type PaginationOptions =
  | {
      take?: number;
    }
  | {
      take?: number;
      skip?: number;
      cursor: Record<string, string>;
    };

@Injectable()
export class JobRepository {
  constructor(private prismaService: PrismaService) {}

  private getPaginationOptions(
    cursor?: string,
    take?: number,
  ): PaginationOptions {
    const isPaginationWithoutCursor = !cursor && !!take;
    const isPaginationWithCursor = !!cursor && !!take;

    if (isPaginationWithoutCursor) {
      return {
        take: take,
      };
    }
    if (isPaginationWithCursor) {
      return {
        take: take,
        skip: 1,
        cursor: {
          id: cursor,
        },
      };
    }

    return {};
  }

  async findMany(cursor?: string, take?: number) {
    return this.prismaService.jobs.findMany({
      ...this.getPaginationOptions(cursor, take),
      where: {
        isUnvailable: false,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async getLatestJobsByTitle(title: string): Promise<jobs[]> {
    return this.prismaService.jobs.findMany({
      where: {
        OR: [
          { title: { contains: title } },
          { description: { contains: title } },
        ],
        AND: { isUnvailable: false },
      },
      orderBy: { id: 'desc' },
    });
  }

  async create(data: any) {
    return this.prismaService.jobs.create({ data });
  }

  async findOneReferenceId(referenceId: number) {
    return this.prismaService.jobs.findFirst({
      where: { referenceId: referenceId },
    });
  }

  async findOneById(id: string) {
    return this.prismaService.jobs.findFirst({ where: { id: id } });
  }

  async updateJobStatus(id: string) {
    return this.prismaService.jobs.update({
      where: { id: id },
      data: { isUnvailable: true },
    });
  }

  async updateTagsJob(id: number, tags: string): Promise<void> {
    const jobsToUpdate = await this.prismaService.jobs.findMany({
      where: {
        referenceId: id,
      },
    });

    const updatePromises = jobsToUpdate.map((job) => {
      return this.prismaService.jobs.update({
        where: { id: job.id },
        data: { tags: tags },
      });
    });

    await Promise.all(updatePromises);
  }

  async findJobsMatchingUserProfession(userProfession: string) {
    return this.prismaService.jobs.findMany({
      where: {
        OR: [
          { title: { contains: userProfession } },
          { description: { contains: userProfession } },
        ],
        AND: { isUnvailable: false },
      },
      orderBy: { id: 'desc' },
      take: 3,
    });
  }
}
