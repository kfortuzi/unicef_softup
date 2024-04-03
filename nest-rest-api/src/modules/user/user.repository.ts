import { Injectable } from '@nestjs/common';
import { CodeType, Prisma } from '@prisma/client';
import { PrismaService } from '../commons/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async findOneByEmail(email: string) {
    return await this.prismaService.users.findUnique({
      where: { email: email },
    });
  }

  async findVerifiedUser(email: string) {
    return await this.prismaService.users.findFirst({
      where: {
        email: email,
        userCode: {
          some: {
            type: 'VERIFICATION',
            confirmedAt: {
              not: null,
            },
          },
        },
      },
    });
  }

  async findOneById(id: string) {
    return this.prismaService.users.findUnique({ where: { id: id } });
  }

  async findOneByIdAndCode(id: string, verificationCode: string) {
    return this.prismaService.user_code.findFirst({
      where: {
        userId: id,
        code: verificationCode,
        type: 'VERIFICATION',
        expiresAt: {
          gte: new Date(),
        },
      },
      include: {
        user: true,
      },
    });
  }
  async update(
    condition: Prisma.usersWhereUniqueInput,
    data: Prisma.usersUpdateInput,
  ) {
    return this.prismaService.users.update({
      where: condition,
      data,
    });
  }

  async create(data: Prisma.usersCreateInput) {
    return this.prismaService.users.create({ data });
  }

  async findUserSkills(userId: string) {
    return this.prismaService.user_skills.findMany({ where: { userId } });
  }

  async findUserSkillById(id: string) {
    return this.prismaService.user_skills.findUnique({ where: { id } });
  }

  // TODO: Create it with upsert
  async createUserSkill(userId: string, name: string) {
    return this.prismaService.user_skills.create({
      data: {
        userId,
        name,
      },
    });
  }

  async updateUserSkill(skillId: string, data: Prisma.user_skillsUpdateInput) {
    return this.prismaService.user_skills.update({
      where: { id: skillId },
      data,
    });
  }

  async deleteUserSkill(skillId: string) {
    return this.prismaService.user_skills.delete({
      where: { id: skillId },
    });
  }

  async findMany() {
    return this.prismaService.users.findMany();
  }

  async createCode(
    userId: string,
    code: string,
    type: CodeType,
    expiresAt: Date,
  ) {
    return await this.prismaService.user_code.create({
      data: {
        userId,
        code,
        type,
        expiresAt,
      },
    });
  }

  async findCodeByUserIdAndCode(userId: string, code: string, type: CodeType) {
    return await this.prismaService.user_code.findFirst({
      where: {
        userId,
        code,
        type,
        expiresAt: {
          gte: new Date(),
        },
      },
    });
  }

  async confirmedCodeById(id: string) {
    return await this.prismaService.user_code.update({
      where: { id },
      data: { confirmedAt: new Date().toISOString() },
    });
  }
}
