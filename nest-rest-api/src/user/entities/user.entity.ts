import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class User {
  @ApiProperty({ type: String, description: "User's id" })
  id: number;

  @ApiProperty({ type: String, description: "User's email" })
  email: string;

  @ApiProperty({ type: String, description: "User's username" })
  username: string;

  @ApiProperty({
    required: false,
    nullable: true,
    type: String,
    description: "User's first_name",
  })
  first_name: string | null;

  @ApiProperty({
    required: false,
    nullable: true,
    type: String,
    description: "User's surname",
  })
  last_name: string | null;

  @ApiHideProperty()
  @Exclude({ toPlainOnly: true })
  password: string;

  @ApiProperty({ required: false, nullable: true, type: String })
  verification_code: string | null;

  @ApiProperty({ required: false, nullable: true, type: Date })
  confirmed_at: Date | null;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
