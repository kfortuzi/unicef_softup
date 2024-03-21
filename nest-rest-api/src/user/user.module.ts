import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from './user.repository';
import { S3Service } from 'src/s3/s3.service';
import { S3Module } from 'src/s3/s3.module';

@Module({
  imports: [S3Module],
  controllers: [UserController],
  providers: [
    UserService,
    CaslAbilityFactory,
    ConfigService,
    UserRepository,
    S3Service,
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}
