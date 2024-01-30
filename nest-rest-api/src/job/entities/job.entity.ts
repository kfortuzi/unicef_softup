import { ApiProperty } from '@nestjs/swagger';

export class Job {
  @ApiProperty({ type: String, description: 'Job id' })
  id: string;

  constructor(partial: Partial<Job>) {
    Object.assign(this, partial);
  }
}
