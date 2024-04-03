import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';
import { Config } from 'config';

@Module({
  imports: [],
  controllers: [AssetController],
  providers: [AssetService, Config],
})
export class AssetModule {}
