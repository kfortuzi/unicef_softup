import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsNotEmpty } from 'class-validator';

export class SendRequestVerificationCodeDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @ApiProperty({ type: String })
  userId: string;
}
