import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;

  @IsString()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String })
  lastName: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({ type: String })
  password: string;
}
