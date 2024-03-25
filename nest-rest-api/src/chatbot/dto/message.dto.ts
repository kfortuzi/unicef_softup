import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  message: string;

  @ApiPropertyOptional({ type: String })
  content?: string;
}
