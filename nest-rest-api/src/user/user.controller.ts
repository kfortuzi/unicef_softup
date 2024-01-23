import {
  Body,
  Controller,
  Get,
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
  ApiBody,
  ApiBearerAuth,
  ApiTags,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { SendResetPasswordUserDto } from './dto/send-reset-password-user.dto';
import { RequestWithUser } from 'src/types/request';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth()
  @ApiTags('users')
  @Post('signup')
  @ApiBody({ type: CreateUserDto })
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
  @ApiCreatedResponse({
    description: 'Return logged-in user.',
    type: User,
    isArray: false,
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  getProfile(@Request() req: RequestWithUser) {
    return this.userService.getProfile(req.user.id);
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
    @Query('id') id: string,
    @Query('verificationCode') verificationCode: string,
  ) {
    return this.userService.confirm(id, verificationCode);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @Patch('send_reset_password')
  @ApiBody({ type: SendResetPasswordUserDto })
  @ApiCreatedResponse({ description: 'An reset password email has been send.' })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  sendResetPassword(
    @Body() sendResetPassowrdUserDto: SendResetPasswordUserDto,
  ) {
    return this.userService.sendResetPassword(sendResetPassowrdUserDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @Patch('reset_password')
  @ApiBody({ type: ResetPasswordUserDto })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  resetPassword(@Body() resetPasswordUserDto: ResetPasswordUserDto) {
    return this.userService.resetPassword(resetPasswordUserDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @Patch()
  @ApiBody({ type: UpdateUserDto })
  update(
    @Request() req: RequestWithUser,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(req.user.id, updateUserDto);
  }
}
