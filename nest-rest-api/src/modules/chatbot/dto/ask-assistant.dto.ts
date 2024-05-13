import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AskAssistantDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @MinLength(1)
  @ApiProperty({ type: String })
  message: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean })
  firstChatbotConversationMessage: boolean;
}
