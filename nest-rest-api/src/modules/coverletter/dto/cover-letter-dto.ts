import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CoverLetterDto {
  @IsString()
  @ApiProperty({ type: String })
  readonly to: string;

  @IsString()
  @ApiProperty({ type: String })
  readonly company: string;

  @ApiPropertyOptional({ type: String })
  readonly companyAddress?: string;

  @ApiPropertyOptional({ type: String })
  readonly content?: string;
}
