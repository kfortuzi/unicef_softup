import {
  IsDateString,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  firstName?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  lastName?: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('AL')
  @ApiProperty({ type: String })
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  profession?: string;

  @IsString()
  @IsOptional()
  @IsDateString()
  @ApiProperty({ type: String })
  birthdayDate?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  hobbies?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  oldPassword?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  newPassword?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  profilePicture: string;
}
