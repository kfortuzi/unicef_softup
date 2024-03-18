import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/prisma/prisma.service';
import { Prisma, cover_letters } from '@prisma/client';

@Injectable()
export class CoverLetterRepository {
  constructor(private prisma: PrismaService) {}

  async createCoverLetter(
    data: Prisma.cover_lettersCreateInput,
  ): Promise<cover_letters> {
    return this.prisma.cover_letters.create({
      data,
    });
  }

  async findAll(userId: string): Promise<cover_letters[]> {
    return this.prisma.cover_letters.findMany({
      where: {
        userId,
        deletedAt: null,
      },
    });
  }

  async findUserCoverLetter(userId: string): Promise<cover_letters | null> {
    return this.prisma.cover_letters.findFirst({
      where: {
        userId,
        deletedAt: null,
      },
    });
  }

  async findOne(id: string, userId: string): Promise<cover_letters | null> {
    return this.prisma.cover_letters.findUnique({
      where: { id, userId },
    });
  }

  async updateResume(
    id: string,
    data: Prisma.cover_lettersUpdateInput,
  ): Promise<cover_letters> {
    return this.prisma.cover_letters.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string) {
    return this.prisma.cover_letters.update({
      where: { id },
      data: { deletedAt: new Date().toISOString() },
    });
  }
}
