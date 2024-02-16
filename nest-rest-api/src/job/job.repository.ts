import { AnyAbility } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { jobs } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/commons/prisma/prisma.service';
import { Job } from './dto/job.dto';

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
        take,
      };
    }

    if (isPaginationWithCursor) {
      return {
        take,
        skip: 0,
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
        createdAt: 'desc',
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
    return this.prismaService.jobs.findMany({ where: { id: id } });
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
}
