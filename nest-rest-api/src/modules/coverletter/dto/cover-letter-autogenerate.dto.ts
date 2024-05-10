import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AutoGenerateCoverLetterDto {
  @IsString()
  @ApiProperty({ type: String })
  readonly content: string;

  @ApiProperty({ type: String })
  readonly coverLetterId: string;
}
