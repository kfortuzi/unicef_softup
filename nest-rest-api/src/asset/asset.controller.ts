import { Controller, UseGuards, Get } from '@nestjs/common';
import { AssetService } from './asset.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('assets')
export class AssetController {
  constructor(private assetService: AssetService) {}

  @ApiBearerAuth()
  @ApiTags('assets')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'The articles are return successfully',
  })
  @Get('articles')
  getArticles() {
    return this.assetService.getArticles();
  }

  @ApiBearerAuth()
  @ApiTags('assets')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'The videos are return successfully',
  })
  @Get('videos')
  getVideos() {
    return this.assetService.getVideos();
  }
}
