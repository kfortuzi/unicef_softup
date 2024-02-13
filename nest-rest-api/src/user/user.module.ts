import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from './user.repository';
import { MailService } from '@sendgrid/mail';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    CaslAbilityFactory,
    ConfigService,
    UserRepository,
    MailService,
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}
