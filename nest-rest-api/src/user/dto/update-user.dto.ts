import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String })
  lastName: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @ApiProperty({ type: String })
  password: string;
}
