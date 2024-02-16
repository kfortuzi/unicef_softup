import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsString, IsNotEmpty } from 'class-validator';

export class UserSkillResponseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;
}
