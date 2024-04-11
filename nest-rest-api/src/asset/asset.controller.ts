import { Controller, UseGuards, Get, Query } from '@nestjs/common';
import { AssetService } from './asset.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('assets')
export class AssetController {
  constructor(private assetService: AssetService) {}

  @ApiBearerAuth()
  @ApiTags('assets')
  @UseGuards(JwtAuthGuard)
  @ApiQuery({
    name: 'userFilter',
    required: false,
    type: String,
    description: 'Filter articles by title',
  })
  @ApiQuery({
    name: 'start',
    required: false,
    type: Number,
    description: 'Start index for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of articles to return for pagination',
  })
  @ApiCreatedResponse({
    description: 'The articles are return successfully',
  })
  @Get('articles')
  getArticles(
    @Query('userFilter') userFilter?: string,
    @Query('start') start?: number,
    @Query('limit') limit?: number,
  ) {
    return this.assetService.getArticles(userFilter, start, limit);
  }

  @ApiBearerAuth()
  @ApiTags('assets')
  @UseGuards(JwtAuthGuard)
  @ApiQuery({
    name: 'userFilter',
    required: false,
    type: String,
    description: 'Filter videos by title',
  })
  @ApiQuery({
    name: 'start',
    required: false,
    type: Number,
    description: 'Start index for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of videos to return for pagination',
  })
  @ApiCreatedResponse({
    description: 'The videos are return successfully',
  })
  @Get('videos')
  getVideos(
    @Query('userFilter') userFilter?: string,
    @Query('start') start?: number,
    @Query('limit') limit?: number,
  ) {
    return this.assetService.getVideos(userFilter, start, limit);
  }
}
