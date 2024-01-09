import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;

  @IsString()
  @ApiProperty({ type: String })
  first_name: string;

  @IsString()
  @ApiProperty({ type: String })
  last_name: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({ type: String })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  confirm_user_url: string;
}
