import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { JobType, EducationType } from '@prisma/client';
import { UserRecommendedJobsDTO } from './user-jobs.dto';

export class Job {
  @IsNotEmpty()
  id: string;

  @IsInt()
  referenceId: number;

  @IsDateString()
  dateStart: Date;

  @IsDateString()
  dateEnd: Date;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsString()
  @IsOptional()
  address?: string | null;

  @IsString()
  location: string;

  @IsEnum(JobType)
  @IsOptional()
  type?: JobType | null;

  @IsInt()
  @IsOptional()
  contractDuration?: number | null;

  @IsString()
  @IsOptional()
  tags?: string | null;

  @IsString()
  @IsOptional()
  company?: string | null;

  @IsInt()
  @IsOptional()
  vacantPositions?: number | null;

  @IsString()
  @IsOptional()
  companyLogo?: string | null;

  @IsString()
  @IsOptional()
  basicSkills?: string | null;

  @IsBoolean()
  @IsOptional()
  communicationSkill?: boolean | null;

  @IsString()
  @IsOptional()
  computerSkills?: string | null;

  @IsString()
  @IsOptional()
  foreignLanguage?: string | null;

  @IsString()
  experience: string | null;

  @IsString()
  @IsOptional()
  skills?: string | null;

  @IsString()
  @IsOptional()
  specializations?: string | null;

  @IsString()
  @IsOptional()
  skillLines?: string | null;

  @IsEnum(EducationType)
  @IsOptional()
  educationType?: EducationType | null;

  @IsString()
  @IsOptional()
  paymentLevel?: string | null;

  @IsBoolean()
  @IsOptional()
  suitableForDisabilities?: boolean | null;

  @IsBoolean()
  @IsOptional()
  needDrivingLicense?: boolean | null;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date | null;

  @IsDateString()
  @IsOptional()
  deletedAt?: Date | null;

  @IsBoolean()
  @IsOptional()
  isUnvailable?: boolean | null;
}
