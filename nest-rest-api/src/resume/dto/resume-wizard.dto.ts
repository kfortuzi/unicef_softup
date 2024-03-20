import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

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
  otherLanguage?: string;

  @ApiProperty()
  @IsString()
  technicalSkills: string;

  @ApiPropertyOptional()
  @IsString()
  softSkills?: string;

  @ApiPropertyOptional()
  @IsString()
  hobbies?: string;

  @ApiPropertyOptional()
  @IsString()
  summary?: string;
}
