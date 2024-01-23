import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

// TODO: Convert to camel case (BE, FE)
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  email: string;

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
}
