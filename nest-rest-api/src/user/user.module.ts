import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [UserService, CaslAbilityFactory, ConfigService],
  exports: [UserService],
})
export class UserModule {}
