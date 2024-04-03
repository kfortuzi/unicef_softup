import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  lastName: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ type: String })
  email: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('AL')
  @ApiProperty({ type: String })
  phoneNumber: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  profession: string;

  @IsString()
  @IsOptional()
  @IsDateString()
  @ApiProperty({ type: String })
  birthdayDate: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  hobbies: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  profilePicture: string;
}
