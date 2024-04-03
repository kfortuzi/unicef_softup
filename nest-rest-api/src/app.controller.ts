import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';
import { AuthService } from './modules/auth/auth.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginAuthDto } from './modules/auth/dto/login-auth.dto';
import { Auth } from './modules/auth/entities/auth.entity';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiTags('auth')
  @ApiBody({ type: LoginAuthDto })
  @UseGuards(LocalAuthGuard)
  @ApiCreatedResponse({
    description: 'The user has been successfully logged in.',
    type: Auth,
    isArray: false,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
