import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class ResetPassowrdUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;

  @IsNotEmpty()
  @IsString()
    @ApiProperty({ type: String })
  reset_password_url: string;
}
