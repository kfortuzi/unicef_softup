import { Module } from '@nestjs/common';
import { SmService } from './sm.service';
import { Config } from 'config';

@Module({
  controllers: [],
  providers: [SmService, Config],
  exports: [SmService],
})
export class SesModule {}
