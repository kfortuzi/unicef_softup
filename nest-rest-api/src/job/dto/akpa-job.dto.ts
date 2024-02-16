import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsArray,
  IsOptional,
  IsDate,
} from 'class-validator';
import { ArrayOfNumAndString } from './types';

class GraduationProfile {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class WorkTime {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class PaymentLevel {
  @IsArray()
  @IsNotEmpty()
  @Type(() => Number)
  payment_level_id: ArrayOfNumAndString;
}

class SkillLine {
  @IsBoolean()
  select: boolean;

  @IsArray()
  @IsNotEmpty()
  name: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class specialization_lines_ids {
  @IsBoolean()
  select: boolean;

  @IsArray()
  @IsNotEmpty()
  name: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class basicSkills {
  @IsBoolean()
  select: boolean;

  @IsArray()
  @IsNotEmpty()
  name: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class computerSkills {
  @IsBoolean()
  select: boolean;

  @IsArray()
  @IsNotEmpty()
  name: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class foreignLanguage {
  @IsBoolean()
  select: boolean;

  @IsArray()
  @IsNotEmpty()
  name: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class skills {
  @IsBoolean()
  select: boolean;

  @IsArray()
  @IsNotEmpty()
  name: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsInt()
  id: number;
}

class EducationLevel {
  @IsArray()
  @IsNotEmpty()
  education_level: ArrayOfNumAndString;
}

class ContractDuration {
  @IsArray()
  @IsNotEmpty()
  contract_duration_id: ArrayOfNumAndString;
}

class EmployerInfo {
  @IsNotEmpty()
  @IsString()
  economic_activity: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  contact_web_page: string;
}

export class AkpaJobDTO {
  @ValidateNested({ each: true })
  @Type(() => GraduationProfile)
  graduation_profile: GraduationProfile[];

  @ValidateNested({ each: true })
  @Type(() => WorkTime)
  work_time: WorkTime[];

  @ValidateNested()
  @Type(() => PaymentLevel)
  payment_level_id: PaymentLevel;

  @IsDate()
  date_end_notification: string;

  @IsArray()
  specialization_lines_ids: specialization_lines_ids[];

  @IsNotEmpty()
  @IsString()
  experience: string;

  @IsNotEmpty()
  @IsString()
  suitable_for_disabilities: string;

  @IsNotEmpty()
  @IsInt()
  id: number;

  @ValidateNested({ each: true })
  @Type(() => skills)
  ss_skills: skills[];

  @ValidateNested()
  @Type(() => ContractDuration)
  contract_duration_id: ContractDuration;

  @IsBoolean()
  job_mobility: boolean;

  @ValidateNested({ each: true })
  @Type(() => basicSkills)
  basic_skill_ids: basicSkills[];

  @IsBoolean()
  vlp_private_url: boolean;

  @ValidateNested()
  @Type(() => EducationLevel)
  education_level: EducationLevel;

  @IsDate()
  date_start_notification: string;

  @IsNotEmpty()
  @IsString()
  position_type: string;

  contract_type_id: ArrayOfNumAndString;

  @ValidateNested({ each: true })
  @Type(() => SkillLine)
  skill_lines_ids: SkillLine[];

  @IsArray()
  @IsNotEmpty()
  job_experience_id: ArrayOfNumAndString;

  @IsNotEmpty()
  @IsString()
  communication_skills: string;

  @IsArray()
  @IsNotEmpty()
  punedhenes_id: ArrayOfNumAndString;

  @IsArray()
  @IsNotEmpty()
  address_id: ArrayOfNumAndString;

  @ValidateNested({ each: true })
  @Type(() => foreignLanguage)
  foreign_language_ids: foreignLanguage[];

  @ValidateNested({ each: true })
  @Type(() => computerSkills)
  computer_line_ids: computerSkills[];

  @IsArray()
  application_document_ids: number[];

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @ValidateNested()
  @Type(() => EmployerInfo)
  employerInfo: EmployerInfo;
}
