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
  @IsOptional()
  startDate?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  endDate?: Date;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  company?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
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
  @IsOptional()
  startDate?: Date;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
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
  @IsOptional()
  reading?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  listening?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  speaking?: string;
}

class CertificateDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
  receivedDate?: Date;

  @ApiPropertyOptional()
  @IsDate()
  @IsOptional()
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
  @IsOptional()
  summary?: string;

  @ApiPropertyOptional({ type: [EducationDto] })
  @Type(() => EducationDto)
  @IsOptional()
  educations?: EducationDto[];

  @ApiPropertyOptional({ type: [ExperienceDto] })
  @Type(() => ExperienceDto)
  @IsOptional()
  experiences?: ExperienceDto[];

  @ApiPropertyOptional({ type: [LanguageDto] })
  @Type(() => LanguageDto)
  @IsOptional()
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
  @IsOptional()
  certificates?: CertificateDto[];

  @ApiPropertyOptional({ type: [VolunteeringDto] })
  @Type(() => VolunteeringDto)
  @IsOptional()
  volunteering?: VolunteeringDto[];

  @ApiPropertyOptional({ type: [PublicationDto] })
  @Type(() => PublicationDto)
  @IsOptional()
  publications?: PublicationDto[];

  @ApiPropertyOptional()
  @IsOptional()
  drivingLicense?: DrivingLicense;
}
