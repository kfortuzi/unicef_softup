import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CaslAbilityFactory } from '../casl/casl-ability.factory';
import { UserRepository } from './user.repository';
import { S3Service } from 'src/s3/s3.service';
import { S3Module } from 'src/s3/s3.module';
import { Config } from 'config';
import { SesService } from 'src/ses/ses.service';

@Module({
  imports: [S3Module],
  controllers: [UserController],
  providers: [
    UserService,
    CaslAbilityFactory,
    Config,
    UserRepository,
    S3Service,
    SesService,
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}
