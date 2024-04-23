import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AskAssistantDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  message: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean })
  firstChatbotConversationMessage: boolean;
}
