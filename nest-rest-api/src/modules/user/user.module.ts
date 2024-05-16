import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { S3Service } from 'src/modules/s3/s3.service';
import { S3Module } from 'src/modules/s3/s3.module';
import { Config } from 'config';
import { SesService } from 'src/modules/ses/ses.service';

@Module({
  imports: [S3Module],
  controllers: [UserController],
  providers: [UserService, Config, UserRepository, S3Service, SesService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
