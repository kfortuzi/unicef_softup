import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, CaslAbilityFactory, ConfigService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
