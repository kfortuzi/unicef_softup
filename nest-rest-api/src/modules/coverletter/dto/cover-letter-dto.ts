import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
export class CoverLetterDto {
  @IsString()
  @ApiProperty({ type: String })
  readonly to: string;

  @IsString()
  @ApiProperty({ type: String })
  readonly company: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  readonly companyAddress?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  readonly content?: string;
}
