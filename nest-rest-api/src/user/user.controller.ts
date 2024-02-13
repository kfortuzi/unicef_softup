import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
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
  ApiParam,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { SendResetPasswordUserDto } from './dto/send-reset-password-user.dto';
import { RequestWithUser } from '../types/request';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';
import { UserSkillDto } from './dto/user-skill.dto';

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

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @Get('skills')
  skills(@Request() req: RequestWithUser) {
    return this.userService.findUserSkills(req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: UserSkillDto })
  @Post('skills')
  createSkill(
    @Request() req: RequestWithUser,
    @Body() userSkillDto: UserSkillDto,
  ) {
    return this.userService.createUserSkill(req.user.id, userSkillDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: UserSkillDto })
  @ApiParam({ name: 'id', required: true })
  @Put('skills/:id')
  updateSkill(
    @Param() params: { id: string },
    @Body() userSkillDto: UserSkillDto,
  ) {
    return this.userService.updateUserSkill(params.id, userSkillDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: 'id', required: true })
  @Delete('skills/:id')
  deleteSkill(@Param() params: { id: string }) {
    return this.userService.deleteUserSkill(params.id);
  }
}
