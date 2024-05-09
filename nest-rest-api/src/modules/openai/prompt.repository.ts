import { Injectable } from '@nestjs/common';
import { Prisma, prompts } from '@prisma/client';
import { PrismaService } from 'src/modules/commons/prisma/prisma.service';
import { PromptType } from './promptTypes';

@Injectable()
export class PromptRepository {
  constructor(private prismaService: PrismaService) {}

  async findPrompts(query: Prisma.promptsWhereInput) {
    return this.prismaService.prompts.findMany({ where: query });
  }

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

  async findLastMessagesPer8Hours(userId: string, promptType: PromptType) {
    const lastMessages: { count: number }[] = await this.prismaService
      .$queryRaw`
    SELECT count(*)
    FROM prompts
    WHERE user_id=${userId}
    AND prompt_type=${promptType}
    AND started_at >= NOW() - INTERVAL '8 hours'`;

    return lastMessages[0].count;
  }
}
