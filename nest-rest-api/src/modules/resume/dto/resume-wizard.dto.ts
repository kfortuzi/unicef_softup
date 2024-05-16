import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ResumeWizardDto {
  @ApiProperty()
  @IsString()
  experiences: string;

  @ApiProperty()
  @IsString()
  educations: string;

  @ApiProperty()
  @IsString()
  nativeLanguage: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  otherLanguage?: string;

  @ApiProperty()
  @IsString()
  technicalSkills: string;

  @ApiProperty()
  @IsString()
  digitalSkills: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  softSkills?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  hobbies?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  summary?: string;
}
