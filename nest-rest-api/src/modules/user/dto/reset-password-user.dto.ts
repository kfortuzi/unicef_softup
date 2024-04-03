import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  verificationCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string;
}
