import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { Config } from 'config';

@Module({
  controllers: [],
  providers: [S3Service, Config],
  exports: [S3Service],
})
export class S3Module {}
