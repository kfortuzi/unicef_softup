import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';
export class ExperieneceDTO {
  @IsString()
  @ApiProperty({ type: String })
  readonly position: string;
  @IsDate()
  @ApiPropertyOptional({ type: Date })
  readonly startDate: Date;
  @IsDate()
  @ApiPropertyOptional({ type: Date })
  readonly endDate: Date;
  @IsString()
  @ApiPropertyOptional({ type: String })
  readonly company: string;
  @IsString()
  @ApiPropertyOptional({ type: String })
  readonly responsibilities: string;
}
