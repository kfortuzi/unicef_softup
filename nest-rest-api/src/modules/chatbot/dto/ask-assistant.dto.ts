import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AskAssistantDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  message: string;
}
