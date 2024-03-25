import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MailService } from '../mail/mail.service';
import { SendResetPasswordUserDto } from './dto/send-reset-password-user.dto';
import { user_skills, users } from '@prisma/client';
import exclude from '../commons/utils/exclude';
import dayjs from 'dayjs';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';
import { UserRepository } from './user.repository';
import { compareHash, hashString } from '../commons/utils/hash';
import { UserSkillDto } from './dto/user-skill.dto';
import { S3Service } from 'src/s3/s3.service';

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

  async findOne(id: string) {
    return this.userRepository.findOneById(id);
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneById(id);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (updateUserDto.firstName) user.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) user.lastName = updateUserDto.lastName;
    if (updateUserDto.phoneNumber) user.phoneNumber = updateUserDto.phoneNumber;
    if (updateUserDto.birthdayDate)
      user.birthdayDate = dayjs(updateUserDto.birthdayDate).toDate();
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
        verificationCode: uuidv4(),
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
      });

      const result = exclude(createdUser, ['password']);

      const link = `<a href=${process.env.FE_HOST}/#/access/confirm-user?id=${createdUser.id}&verificationCode=${createdUser.verificationCode}> Link to confirm</a>`;
      await MailService.prototype.sendEmail(
        createdUser.email,
        'Confirmation Email',
        link,
      );
      return result;
    }
  }

  async confirm(id: string, verificationCode: string) {
    const user = await this.userRepository.findOneByIdAndCode(
      id,
      verificationCode,
    );

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (user.confirmedAt) return;

    return exclude(
      await this.userRepository.update(
        { id, verificationCode },
        { confirmedAt: new Date(), verificationCode: null },
      ),
      userExcludedData,
    );
  }

  // TODO: Think of a way to invalidate the code after X minutes.
  async sendResetPassword({ email }: SendResetPasswordUserDto) {
    const user = await this.userRepository.findOneByEmail(email);

    if (!user || !user.confirmedAt)
      throw new UnprocessableEntityException({
        errorCode: 422,
        message: 'User does not exists!',
      });

    const userWithVfCode = await this.userRepository.update(
      { email },
      {
        verificationCode: uuidv4(),
      },
    );

    const link = `<a href=${process.env.RESET_PASSWORD_URL}?id=${user.id}&verificationCode=${userWithVfCode.verificationCode}> Link to reset password</a>`;

    MailService.prototype.sendEmail(user.email, 'Reset Email', link);

    return { description: 'An reset password email has been send.' };
  }

  async resetPassword({
    userId,
    verificationCode,
    password,
  }: ResetPasswordUserDto) {
    const user = await this.userRepository.findOneById(userId);

    if (!user) throw new NotFoundException({ message: 'User not found!' });

    if (
      password &&
      verificationCode &&
      verificationCode === user.verificationCode
    ) {
      const hashedPass = await hashString(password);
      await this.userRepository.update(
        { id: userId },
        {
          password: hashedPass,
          verificationCode: null,
        },
      );
      return { description: 'Success' };
    } else {
      throw new ForbiddenException();
    }
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
      throw new Error(`${error}`);
    }
  }
}
