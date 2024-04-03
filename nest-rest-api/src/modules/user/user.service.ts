import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SendResetPasswordUserDto } from './dto/send-reset-password-user.dto';
import { user_skills, users } from '@prisma/client';
import exclude from '../commons/utils/exclude';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';
import { UserRepository } from './user.repository';
import { compareHash, hashString } from '../commons/utils/hash';
import { UserSkillDto } from './dto/user-skill.dto';

import { Config } from 'config';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { S3Service } from 'src/modules/s3/s3.service';
import { SesService } from 'src/modules/ses/ses.service';
import { SendRequestVerificationCodeDto } from './dto/request-verification-code-dto';
dayjs.extend(utc);

const userExcludedData = [
  'password',
  'id',
  'verificationCode',
  'confirmedAt',
  'createdAt',
  'updatedAt',
  'deletedAt',
] as unknown as (keyof users)[];

const userSkillsExcludedData = ['userId'] as unknown as (keyof user_skills)[];

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private s3service: S3Service,
    private config: Config,
    private sesService: SesService,
  ) {}

  async getProfile(id: string) {
    const user = await this.userRepository.findOneById(id);
    if (!user) throw new NotFoundException({ message: 'User not found!' });
    if (user.profilePicture) {
      const userProfilePicture = await this.s3service.generatePresignedUrl(
        user.profilePicture,
      );
      user.profilePicture = userProfilePicture;
    }

    return exclude(user, userExcludedData);
  }

  async findOne(id: string): Promise<users | null> {
    return this.userRepository.findOneById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneById(id);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;
    if (updateUserDto.phoneNumber) user.phoneNumber = updateUserDto.phoneNumber;
    if (updateUserDto.birthdayDate)
      user.birthdayDate = dayjs.utc(updateUserDto.birthdayDate).toDate();
    if (updateUserDto.profession) user.profession = updateUserDto.profession;
    if (updateUserDto.hobbies) user.hobbies = updateUserDto.hobbies;
    if (updateUserDto.oldPassword && updateUserDto.newPassword) {
      const isSameOldPass = await compareHash(
        updateUserDto.oldPassword,
        user.password,
      );
      if (isSameOldPass) {
        const hashedNewPass = await hashString(updateUserDto.newPassword);
        user.password = hashedNewPass;
      } else {
        throw new UnprocessableEntityException({
          errorCode: 422,
          message: 'Passwords do not match!',
        });
      }
    }

    return exclude(
      await this.userRepository.update(
        { id: id },
        {
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          birthdayDate: user.birthdayDate,
          profession: user.profession,
          hobbies: user.hobbies,
          password: user.password,
        },
      ),
      userExcludedData,
    );
  }

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.email && createUserDto.password) {
      const user = await this.userRepository.findOneByEmail(
        createUserDto.email,
      );
      if (user)
        throw new UnprocessableEntityException({
          errorCode: 422,
          message: 'User already exists!',
        });
      const password = await hashString(createUserDto.password);

      const createdUser: users = await this.userRepository.create({
        email: createUserDto.email,
        password,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
      });

      const verificationCode = uuidv4();
      const expiresAt = dayjs().add(24, 'hour').toDate();
      await this.userRepository.createCode(
        createdUser.id,
        verificationCode,
        'VERIFICATION',
        expiresAt,
      );
      const result = exclude(createdUser, ['password']);
      const link = `<a href="${this.config.feHost}/#/access/confirm-user?id=${createdUser.id}&verificationCode=${verificationCode}">Link to confirm</a>`;
      await this.sesService.sendEmail(
        'Verify Your Email',
        `Please click on the following link to verify your email: ${link}`,
        createdUser.email,
      );

      return result;
    }
  }

  async confirm(id: string, verificationCode: string) {
    try {
      const userExists = await this.userRepository.findOneById(id);
      if (!userExists)
        throw new NotFoundException({ message: 'User not found!' });
      const userCode = await this.userRepository.findCodeByUserIdAndCode(
        id,
        verificationCode,
        'VERIFICATION',
      );

      if (userCode?.confirmedAt) {
        throw new NotFoundException({
          message: 'User already confirmed.',
        });
      } else if (!userCode) {
        throw new NotFoundException({
          message: 'Expired verification code',
        });
      }

      await this.userRepository.confirmedCodeById(userCode.id);
      return { message: 'User successfully confirmed.' };
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async requestNewVerificationCode({ userId }: SendRequestVerificationCodeDto) {
    const user = await this.userRepository.findOneById(userId);

    if (!user) {
      throw new InternalServerErrorException('User not found.');
    }

    const verificationCode = uuidv4();
    const expiresAt = dayjs().add(24, 'hour').toDate();

    await this.userRepository.createCode(
      user.id,
      verificationCode,
      'VERIFICATION',
      expiresAt,
    );
    const link = `<a href="${this.config.feHost}/#/access/confirm-user?id=${user.id}&verificationCode=${verificationCode}">Link to confirm</a>`;
    await this.sesService.sendEmail(
      'Verify Your Email',
      `Please click on the following link to verify your email: ${link}`,
      user.email,
    );
    return { message: 'Verification email sent.' };
  }

  async sendResetPassword({ email }: SendResetPasswordUserDto) {
    const user = await this.userRepository.findOneByEmail(email);

    if (!user)
      throw new UnprocessableEntityException({
        errorCode: 422,
        message: 'User does not exists!',
      });

    const resetCode = uuidv4();
    const expiresAt = dayjs().add(1, 'hour').toDate();

    await this.userRepository.createCode(
      user.id,
      resetCode,
      'PASSWORD_RESET',
      expiresAt,
    );
    const link = `<a href=${this.config.feHost}/#/acccess/reset-password?id=${user.id}&verificationCode=${resetCode}> Link to reset password</a>`;

    this.sesService.sendEmail(
      'Reset Your Password',
      `Please click on the following link to reset your password: ${link}`,
      user.email,
    );
    return { description: 'An reset password email has been send.' };
  }

  async resetPassword({
    userId,
    verificationCode,
    password,
  }: ResetPasswordUserDto) {
    const user = await this.userRepository.findOneById(userId);

    if (!user) throw new NotFoundException({ message: 'User not found!' });
    const codeValid = await this.userRepository.findCodeByUserIdAndCode(
      userId,
      verificationCode,
      'PASSWORD_RESET',
    );
    if (!codeValid) {
      throw new ForbiddenException({
        message: 'Invalid or expired reset code.',
      });
    }
    const hashedPass = await hashString(password);
    await this.userRepository.update({ id: userId }, { password: hashedPass });
    await this.userRepository.confirmedCodeById(codeValid.id);
    return { description: 'Success' };
  }

  async findUserSkills(userId: string) {
    return (await this.userRepository.findUserSkills(userId)).map((s) =>
      exclude(s, userSkillsExcludedData),
    );
  }

  async createUserSkill(userId: string, { name }: UserSkillDto) {
    return exclude(
      await this.userRepository.createUserSkill(userId, name),
      userSkillsExcludedData,
    );
  }

  async updateUserSkill(skillId: string, data: UserSkillDto) {
    return exclude(
      await this.userRepository.updateUserSkill(skillId, data),
      userSkillsExcludedData,
    );
  }

  async deleteUserSkill(skillId: string) {
    const skill = await this.userRepository.findUserSkillById(skillId);

    if (!skill) {
      throw new NotFoundException();
    }

    return exclude(
      await this.userRepository.deleteUserSkill(skillId),
      userSkillsExcludedData,
    );
  }

  async getUserSkillsAsString(userId: string): Promise<string> {
    return this.findUserSkills(userId).then((data) => {
      const names = data.map((obj) => obj.name).join(', ');
      return names;
    });
  }

  async uploadProfilePicture(file: Express.Multer.File, userId: string) {
    try {
      const mimeType = file.mimetype.split('/')[1];
      const photoKey = `user/${userId}.${mimeType}`;
      const uploadResponse = await this.s3service.uploadPhoto(file, photoKey);
      if (uploadResponse == 200) {
        this.userRepository.update(
          { id: userId },
          {
            profilePicture: photoKey,
          },
        );
      }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
}
