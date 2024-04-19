import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DrivingLicense } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';

export class ExperienceDto {
  @ApiProperty()
  @IsString()
  position: string;

  @ApiPropertyOptional()
  startDate?: Date;

  @ApiPropertyOptional()
  endDate?: Date;

  @ApiPropertyOptional()
  @IsString()
  company?: string;

  @ApiPropertyOptional()
  @IsString()
  responsibilities?: string;
}

class EducationDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiPropertyOptional()
  @IsDate()
  startDate?: Date;

  @ApiPropertyOptional()
  @IsDate()
  endDate?: Date;
}

class LanguageDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsBoolean()
  isNative: boolean;

  @ApiPropertyOptional()
  @IsString()
  reading?: string;

  @ApiPropertyOptional()
  @IsString()
  listening?: string;

  @ApiPropertyOptional()
  @IsString()
  speaking?: string;
}

class CertificateDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsDate()
  receivedDate?: Date;

  @ApiPropertyOptional()
  @IsDate()
  expirationDate?: Date;
}

class VolunteeringDto {
  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsString()
  organization: string;
}

class PublicationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  link?: string;

  @ApiPropertyOptional()
  @IsDate()
  releaseDate?: Date;
}

export class ResumeDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  email?: string;

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

  @ApiPropertyOptional({ type: [EducationDto] })
  @Type(() => EducationDto)
  educations?: EducationDto[];

  @ApiPropertyOptional({ type: [ExperienceDto] })
  @Type(() => ExperienceDto)
  experiences?: ExperienceDto[];

  @ApiPropertyOptional({ type: [LanguageDto] })
  @Type(() => LanguageDto)
  languages?: LanguageDto[];

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  digitalSkills?: string[];

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  technicalSkills?: string[];

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  softSkills?: string[];

  @ApiPropertyOptional()
  @IsArray()
  @IsOptional()
  hobbies?: string[];

  @ApiPropertyOptional({ type: [CertificateDto] })
  @Type(() => CertificateDto)
  certificates?: CertificateDto[];

  @ApiPropertyOptional({ type: [VolunteeringDto] })
  @Type(() => VolunteeringDto)
  volunteering?: VolunteeringDto[];

  @ApiPropertyOptional({ type: [PublicationDto] })
  @Type(() => PublicationDto)
  publications?: PublicationDto[];

  @ApiPropertyOptional()
  @IsOptional()
  drivingLicense?: DrivingLicense;
}
