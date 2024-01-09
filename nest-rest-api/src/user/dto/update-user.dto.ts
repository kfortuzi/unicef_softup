import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  first_name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  last_name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @ApiProperty({ type: String })
  password: string;
}
