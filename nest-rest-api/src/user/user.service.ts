import {
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
import { ResetPassowrdUserDto } from './dto/reset-password-user.dto';
import { ConfigService } from '@nestjs/config';
import { users } from '@prisma/client';

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

  async update(
    id: string,
    verificationCode: string | null,
    updateUserDto: UpdateUserDto,
  ) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;

    if (
      updateUserDto.password &&
      verificationCode &&
      verificationCode === user.verificationCode
    ) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(updateUserDto.password, salt);
      user.verificationCode = uuidv4();
    }

    return await this.prismaService.users.update({
      where: { id: id },
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        verificationCode: user.verificationCode,
      },
    });
  }

  isValidEmail(email: string) {
    if (email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    } else return false;
  }

  async create(createUserDto: CreateUserDto) {
    if (this.isValidEmail(createUserDto.email) && createUserDto.password) {
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

      const { password: psw, ...rest } = createdUser;
      const hostURL = this.configService.get<string>('FE_URL') as string;
      const link = `<a href=${createUserDto.confirm_user_url}/?id=${createdUser.id}&verificationCode=${createdUser.verificationCode}> Link to confirm</a>`;
      await MailService.prototype.sendEmail(
        createdUser.email,
        'Confirmation Email',
        link,
      );
      return rest;
    }
  }

  async confirm(id: string, verificationCode: string) {
    return await this.prismaService.users.update({
      where: { id: id },
      data: { confirmedAt: new Date(), verificationCode },
    });
  }

  async sendResetPassword(resetPassowrdUserDto: ResetPassowrdUserDto) {
    const user = await this.findOneByEmail(resetPassowrdUserDto.email);

    if (!user)
      throw new UnprocessableEntityException({
        errorCode: 422,
        message: 'User does not exists!',
      });

    // const hostURL = new URL(this.configService.get<string>('FE_URL') as string);
    // const stringId: string = user.id.toString();
    // const stringVerificationCode: string = user.verificationCode || "";
    // const searchParams = new URLSearchParams({ id: stringId, verificationCode: stringVerificationCode });
    // hostURL.search = searchParams.toString()
    const link = `<a href=${resetPassowrdUserDto.reset_password_url}?id=${user.id}&verificationCode=${user.verificationCode}> Link to reset password</a>`;
    await MailService.prototype.sendEmail(user.email, 'Reset Email', link);
  }
}
