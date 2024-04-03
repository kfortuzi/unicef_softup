import { ApiPropertyOptional } from '@nestjs/swagger';

export class JobTipsDto {
  @ApiPropertyOptional({ type: String })
  tips?: string | null;

  @ApiPropertyOptional({ type: String })
  interviewQuestions?: string | null;
}
