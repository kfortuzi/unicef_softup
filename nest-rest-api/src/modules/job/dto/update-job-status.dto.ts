import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsBoolean } from 'class-validator';

export class UpdateJobStatusDto {
  @ApiProperty()
  @IsBoolean()
  isUnvailable?: boolean;

  @ApiPropertyOptional()
  updatedAt: Date;
}
