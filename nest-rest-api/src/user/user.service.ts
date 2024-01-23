import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/commons/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MailService } from 'src/mail/mail.service';
import { SendResetPasswordUserDto } from './dto/send-reset-password-user.dto';
import { ConfigService } from '@nestjs/config';
import { users } from '@prisma/client';
import exclude from 'src/commons/utils/exclude';
import dayjs from 'dayjs';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  async findOneByEmail(email: string) {
    return await this.prismaService.users.findUnique({
      where: { email: email },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.users.findUnique({ where: { id: id } });
  }

  async findOneByIdAndCode(id: string, verificationCode: string) {
    return await this.prismaService.users.findUnique({
      where: { id, verificationCode },
    });
  }

  async getProfile(id: string) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException({ message: 'User not found!' });

    return exclude(user, ['password', 'id']);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;
    if (updateUserDto.phoneNumber) user.phoneNumber = updateUserDto.phoneNumber;
    if (updateUserDto.birthdayDate)
      user.birthdayDate = dayjs(updateUserDto.birthdayDate).toDate();
    if (updateUserDto.profession) user.profession = updateUserDto.profession;
    if (updateUserDto.hobbies) user.hobbies = updateUserDto.hobbies;

    if (updateUserDto.oldPassword && updateUserDto.newPassword) {
      const isSameOldPass = await bcrypt.compare(
        updateUserDto.oldPassword,
        user.password,
      );
      if (isSameOldPass) {
        const salt = await bcrypt.genSalt();
        const hashedNewPass = await bcrypt.hash(
          updateUserDto.newPassword,
          salt,
        );
        user.password = hashedNewPass;
      } else {
        throw new UnprocessableEntityException({
          errorCode: 422,
          message: 'Passwords do not match!',
        });
      }
    }

    return exclude(
      await this.prismaService.users.update({
        where: { id: id },
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          birthdayDate: user.birthdayDate,
          profession: user.profession,
          hobbies: user.hobbies,
          password: user.password,
        },
      }),
      ['password'],
    );
  }

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.email && createUserDto.password) {
      const user = await this.findOneByEmail(createUserDto.email);
      if (user)
        throw new UnprocessableEntityException({
          errorCode: 422,
          message: 'User already exists!',
        });
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash(createUserDto.password, salt);
      const createdUser: users = await this.prismaService.users.create({
        data: {
          email: createUserDto.email,
          password,
          verificationCode: uuidv4(),
          firstName: createUserDto.first_name,
          lastName: createUserDto.last_name,
        },
      });

      const result = exclude(createdUser, ['password']);

      const link = `<a href=${process.env.FE_HOST}/?id=${createdUser.id}&verificationCode=${createdUser.verificationCode}> Link to confirm</a>`;
      await MailService.prototype.sendEmail(
        createdUser.email,
        'Confirmation Email',
        link,
      );
      return result;
    }
  }

  async confirm(id: string, verificationCode: string) {
    const user = await this.findOneByIdAndCode(id, verificationCode);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (user.confirmedAt) return;

    return exclude(
      await this.prismaService.users.update({
        where: { id, verificationCode },
        data: { confirmedAt: new Date(), verificationCode: null },
      }),
      ['password', 'id'],
    );
  }

  // TODO: Think of a way to invalidate the code after X minutes.
  async sendResetPassword({ email }: SendResetPasswordUserDto) {
    const user = await this.findOneByEmail(email);

    if (!user || !user.confirmedAt)
      throw new UnprocessableEntityException({
        errorCode: 422,
        message: 'User does not exists!',
      });

    const userWithVfCode = await this.prismaService.users.update({
      where: { email },
      data: {
        verificationCode: uuidv4(),
      },
    });

    const link = `<a href=${process.env.RESET_PASSWORD_URL}?id=${user.id}&verificationCode=${userWithVfCode.verificationCode}> Link to reset password</a>`;

    await MailService.prototype.sendEmail(user.email, 'Reset Email', link);
  }

  async resetPassword({
    userId,
    verificationCode,
    password,
  }: ResetPasswordUserDto) {
    const user = await this.findOne(userId);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (
      password &&
      verificationCode &&
      verificationCode === user.verificationCode
    ) {
      const salt = await bcrypt.genSalt();

      const hashedPass = await bcrypt.hash(password, salt);
      await this.prismaService.users.update({
        where: { id: userId },
        data: {
          password: hashedPass,
          verificationCode: null,
        },
      });
    } else {
      throw new ForbiddenException();
    }
  }
}
