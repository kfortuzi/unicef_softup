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
  UploadedFile,
  UseGuards,
  UseInterceptors,
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
  ApiConsumes,
} from '@nestjs/swagger';
import { SendResetPasswordUserDto } from './dto/send-reset-password-user.dto';
import { RequestWithUser } from '../types/request';
import { ResetPasswordUserDto } from './dto/reset-password-user.dto';
import { UserSkillDto } from './dto/user-skill.dto';
import { UserDto } from './dto/user.dto';
import { UserSkillResponseDto } from './dto/user-skill-response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { SendRequestVerificationCodeDto } from './dto/request-verification-code-dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBearerAuth()
  @ApiTags('users')
  @Post('signup')
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({
    description: 'The user has been successfully created.',
    type: UserDto,
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
    type: UserDto,
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
    type: UserDto,
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
  @Post('send-reset-password')
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
  @Patch('reset-password')
  @ApiBody({ type: ResetPasswordUserDto })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  resetPassword(@Body() resetPasswordUserDto: ResetPasswordUserDto) {
    return this.userService.resetPassword(resetPasswordUserDto);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @ApiBody({ type: SendRequestVerificationCodeDto })
  @ApiCreatedResponse({ description: 'An new email has been send.' })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Post('request-verification')
  async requestVerification(@Body() request: SendRequestVerificationCodeDto) {
    await this.userService.requestNewVerificationCode({
      userId: request.userId,
    });
    return {
      message:
        'An new email has been send. Please check your email to verify your account.',
    };
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    type: UserDto,
    isArray: false,
  })
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
  @ApiCreatedResponse({
    type: UserSkillResponseDto,
    isArray: true,
  })
  @Get('skills')
  skills(@Request() req: RequestWithUser) {
    return this.userService.findUserSkills(req.user.id);
  }

  @ApiBearerAuth()
  @ApiTags('users')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    type: UserSkillResponseDto,
    isArray: false,
  })
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
  @ApiCreatedResponse({
    type: UserSkillResponseDto,
    isArray: false,
  })
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
  @ApiCreatedResponse({
    type: UserSkillResponseDto,
    isArray: false,
  })
  @ApiParam({ name: 'id', required: true })
  @Delete('skills/:id')
  deleteSkill(@Param() params: { id: string }) {
    return this.userService.deleteUserSkill(params.id);
  }

  @ApiBearerAuth()
  @Post('upload-photo')
  @UseGuards(JwtAuthGuard)
  @ApiTags('users')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Request() req: RequestWithUser,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.uploadProfilePicture(file, req.user.id);
  }
}
