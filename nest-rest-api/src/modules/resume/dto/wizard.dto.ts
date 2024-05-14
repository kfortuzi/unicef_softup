import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class WizardDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty({ type: String })
  message: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  content: string;
}
