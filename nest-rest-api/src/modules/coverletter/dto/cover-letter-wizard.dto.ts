import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CoverLetterWizardDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  readonly title: string;

  @IsString()
  @ApiProperty({ type: String })
  readonly company: string;

  @IsString()
  @ApiProperty({ type: String })
  readonly companyAddress: string;

  @IsString()
  @ApiProperty({ type: String })
  readonly toPerson: string;

  @IsString()
  @ApiProperty({ type: String })
  readonly motive: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  readonly topic: string;
}
