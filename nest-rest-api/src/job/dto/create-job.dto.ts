import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateJobDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  contractDuration?: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  company?: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  vacantPositions?: number;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  suitableForDisabilities?: boolean;
}
