import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class JobTipsDto {
  @ApiPropertyOptional({ type: String })
  @IsOptional()
  tips?: string | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  interviewQuestions?: string | null;
}
