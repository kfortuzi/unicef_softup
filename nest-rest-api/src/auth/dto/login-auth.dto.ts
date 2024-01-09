import { IsString, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String })
  @IsString()
  @MinLength(8)
  password: string;
}
