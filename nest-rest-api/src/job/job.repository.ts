import { Injectable } from '@nestjs/common';
import { jobs } from '@prisma/client';
import { PrismaService } from '../commons/prisma/prisma.service';

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
      },
      orderBy: { id: 'desc' },
    });
  }
}
