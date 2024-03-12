import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  message: string;
}
