import {
  Controller,
  Request,
  Response,
  Post,
  UseGuards,
  Get,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiForbiddenResponse,
  ApiHideProperty,
  ApiOAuth2,
  ApiTags,
} from '@nestjs/swagger';
import { LoginAuthDto } from './auth/dto/login-auth.dto';
import { Auth } from './auth/entities/auth.entity';
import { GoogleOAuthGuard } from './auth/google-oauth.guard';

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

  @ApiTags('auth')
  @ApiExcludeEndpoint()
  @Get('auth/')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {}

  @ApiTags('auth')
  @ApiExcludeEndpoint()
  @Get('auth/google-redirect')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(
    @Req() req: any,
    @Res({ passthrough: true }) res: any,
  ) {
    const auth = await this.authService.login(req.user);
    res.cookie('access_token', auth.access_token, {
      maxAge: 2592000000,
      sameSite: true,
      secure: false,
    });
    return auth;
  }
}
