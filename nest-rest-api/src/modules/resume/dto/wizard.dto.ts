import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class WizardDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  message: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  content: string;
}
