import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { PromptType } from '../promptTypes';

export class CreatePromptDTO {
  @IsString()
  @ApiProperty({ type: String })
  readonly userId: string;

  @IsString()
  @ApiProperty()
  readonly promptType: PromptType;

  @IsString()
  @ApiProperty()
  readonly promptRequest: string;

  @IsString()
  @ApiPropertyOptional()
  readonly prompResponse: string;

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  readonly requireHistory: boolean;

  @IsDate()
  @ApiPropertyOptional({ type: Date })
  readonly startedAt: Date;

  @IsDate()
  @ApiPropertyOptional({ type: Date })
  readonly endedAt: Date;
}
