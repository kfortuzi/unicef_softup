import { Injectable } from '@nestjs/common';
import { Prisma, prompts } from '@prisma/client';
import { PrismaService } from 'src/modules/commons/prisma/prisma.service';

@Injectable()
export class PromptRepository {
  constructor(private prismaService: PrismaService) {}

  async getLatestPromptsByUser(
    userId: string,
    promptType: string,
  ): Promise<prompts[]> {
    return this.prismaService.prompts.findMany({
      where: {
        AND: [
          { userId: { equals: userId } },
          { promptType: { equals: promptType } },
        ],
      },
      orderBy: { id: 'desc' },
    });
  }

  async create(data: Prisma.promptsCreateInput) {
    return this.prismaService.prompts.create({ data });
  }

  async findOneById(id: string) {
    return this.prismaService.prompts.findMany({ where: { id: id } });
  }
}
