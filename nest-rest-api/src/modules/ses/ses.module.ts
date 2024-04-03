import { Module } from '@nestjs/common';
import { SesService } from './ses.service';
import { Config } from 'config';

@Module({
  controllers: [],
  providers: [SesService, Config],
  exports: [SesService],
})
export class SesModule {}
