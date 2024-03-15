import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/prisma/prisma.service';
import { resumes, Prisma } from '@prisma/client';

@Injectable()
export class ResumeRepository {
  constructor(private prisma: PrismaService) {}

  async createResume(data: Prisma.resumesCreateInput): Promise<resumes> {
    return this.prisma.resumes.create({
      data,
    });
  }

  async findAll(userId: string): Promise<resumes[]> {
    return this.prisma.resumes.findMany({
      where: {
        userId,
        deletedAt: null,
      },
    });
  }

  async findUserResume(
    userId: string,
    referenceId: string | null,
  ): Promise<resumes | null> {
    return this.prisma.resumes.findFirst({
      where: {
        userId,
        deletedAt: null,
        referenceId,
      },
    });
  }

  async getUserResumeExperiences(
    userId: string,
  ): Promise<Prisma.JsonValue | undefined> {
    const resume = await this.prisma.resumes.findFirst({
      where: { userId: userId, referenceId: null, deletedAt: null },
      select: { experiences: true },
    });

    return resume?.experiences;
  }

  async findOne(id: string, userId: string): Promise<resumes | null> {
    return this.prisma.resumes.findUnique({
      where: { id, userId },
    });
  }

  async updateResume(
    id: string,
    data: Prisma.resumesUpdateInput,
  ): Promise<resumes> {
    return this.prisma.resumes.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string) {
    return this.prisma.resumes.update({
      where: { id, referenceId: null },
      data: { deletedAt: new Date().toISOString() },
    });
  }
}
