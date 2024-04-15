import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Config } from 'config';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, Config],
  exports: [PrismaService],
})
export class PrismaModule {}
