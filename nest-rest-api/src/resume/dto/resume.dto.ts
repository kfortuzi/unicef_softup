import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DrivingLicense } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsJSON,
  IsOptional,
  IsString,
} from 'class-validator';

export class ResumeDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  profilePicture?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nationality?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  linkedinUrl?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  summary?: string;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  education?: object;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  experiences?: object;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  languages?: object;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  digitalSkills?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  softSkills?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  hobbies?: string;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  certificates?: object;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  volunteering?: object;

  @ApiPropertyOptional()
  @IsJSON()
  @IsOptional()
  publications?: object;

  @ApiPropertyOptional()
  @IsOptional()
  drivingLicense?: DrivingLicense;

  @ApiProperty()
  @IsBoolean()
  enhanced: boolean;

  @ApiProperty()
  @IsDateString()
  createdAt: Date;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  updatedAt?: Date;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  deletedAt?: Date;
}
