import { Injectable } from '@nestjs/common';
import { Prisma, SourceType, wizard_answer } from '@prisma/client';
import { PrismaService } from 'src/modules/commons/prisma/prisma.service';

@Injectable()
export class WizardRepository {
  constructor(private prismaService: PrismaService) {}

  async getAnswersByUser(
    userId: string,
    sourceType: SourceType,
  ): Promise<wizard_answer[]> {
    return this.prismaService.wizard_answer.findMany({
      where: {
        AND: [{ userId: { equals: userId }, source: sourceType }],
      },
    });
  }

  async saveUserAnswers(data: Prisma.wizard_answerCreateInput) {
    return this.prismaService.wizard_answer.create({ data });
  }
}
