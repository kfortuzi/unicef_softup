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
import { User } from './entities/user.entity';
import { ResetPassowrdUserDto } from './dto/reset-password-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService, private configService: ConfigService) {}

  async findOneByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email: email },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({ where: { id: id } });
  }

  async update(
    id: number,
    verificationCode: string | null,
    updateUserDto: UpdateUserDto,
  ) {
    let user = await this.findOne(id);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (updateUserDto.username) user.username = updateUserDto.username;
    if (updateUserDto.first_name) user.first_name = updateUserDto.first_name;
    if (updateUserDto.last_name) user.last_name = updateUserDto.last_name;

    if (
      updateUserDto.password &&
      verificationCode &&
      verificationCode == user.verificationCode
    ) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(updateUserDto.password, salt);
      user.verificationCode = uuidv4();
    }

    return await this.prismaService.user.update({
      where: { id: id },
      data: {
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        password: user.password,
        verificationCode: user.verificationCode,
      },
    });
  }

  isValidEmail(email: string) {
    if (email) {
      var re =
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
      const createdUser: User = await this.prismaService.user.create({
        data: {
          email: createUserDto.email,
          password,
          verificationCode: uuidv4(),
          username: createUserDto.username,
          first_name: createUserDto.first_name,
          last_name: createUserDto.last_name,
        },
      });

      const { password:psw, ...rest } = createdUser
      const hostURL = this.configService.get<string>('FE_URL') as string
      const link = `<a href=${createUserDto.confirm_user_url}/?id=${createdUser.id}&verificationCode=${createdUser.verificationCode}> Link to confirm</a>`;
      await MailService.prototype.sendEmail( createdUser.email, 'Confirmation Email', link);
      return rest;
    }
  }

  async confirm(id: number, verificationCode: string) {
    return await this.prismaService.user.update({
      where: { id: id },
      data: { confirmed_at: new Date(), verificationCode: verificationCode },
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
