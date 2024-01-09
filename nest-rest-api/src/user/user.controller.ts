import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiParam,
  ApiBody,
  ApiBearerAuth,
  ApiTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { CheckPolicies, PoliciesGuard } from 'src/auth/policy.guard';
import { Action, AppAbility } from 'src/casl/casl-ability.factory';
import { GoogleOAuthGuard } from 'src/auth/google-oauth.guard';
import { ResetPassowrdUserDto } from './dto/reset-password-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth()
  @ApiTags('users')
  @Post('signup')
  @ApiCreatedResponse({
    description: 'The user has been successfully created.',
    type: User,
    isArray: false,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  // @UseGuards(JwtAuthGuard, PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, 'User'))
  @ApiCreatedResponse({
    description: 'Return logged-in user.',
    type: User,
    isArray: false,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  getProfile(@Request() req: any) {
    return this.userService.findOneByEmail(req.user.email);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @Get('confirm')
  @ApiCreatedResponse({
    description: 'The user has been confirmed.',
    type: User,
    isArray: false,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  confirm(
    @Query('id') id: number,
    @Query('verificationCode') verificationCode: string,
  ) {
    return this.userService.confirm(Number(id), verificationCode);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @Patch('send_reset_password')
  @ApiBody({ type: ResetPassowrdUserDto })
  @ApiCreatedResponse({ description: 'An reset password email has been send.' })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  sendResetPassword(@Body() resetPassowrdUserDto: ResetPassowrdUserDto) {
    return this.userService.sendResetPassword(resetPassowrdUserDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @Patch(':id')
  @ApiBody({ type: UpdateUserDto })
  @ApiParam({ type: Number, name: 'id' })
  @ApiQuery({ type: String, name: 'verificationCode', required: false })
  update(
    @Param('id') id: number,
    @Query('verificationCode') verificationCode: string | null,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, verificationCode, updateUserDto);
  }
}
