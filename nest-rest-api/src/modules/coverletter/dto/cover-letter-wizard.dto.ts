import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CoverLetterWizardDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  readonly title: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  readonly company: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  readonly companyAddress: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  readonly toPerson: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  readonly motive: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  readonly topic: string;
}
