import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { JobType, EducationType } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class JobSummaryDTO {
  @IsString()
  @ApiProperty({ type: String })
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  description?: string | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  address?: string | null;

  @IsString()
  @ApiPropertyOptional({ type: String })
  location: string;

  @IsEnum(JobType)
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  type?: JobType | null;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  contractDuration?: number | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  tags?: string | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  company?: string | null;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  vacantPositions?: number | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  basicSkills?: string | null;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  communicationSkill?: boolean | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  computerSkills?: string | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  foreignLanguage?: string | null;

  @IsString()
  @ApiPropertyOptional({ type: String })
  experience: string | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  skills?: string | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  specializations?: string | null;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  skillLines?: string | null;

  @IsEnum(EducationType)
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  educationType?: EducationType | null;
}
