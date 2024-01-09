import { ApiProperty } from '@nestjs/swagger';

export class Auth {
  @ApiProperty({ type: String, description: "User's access_token" })
  access_token: string;

  constructor(partial: Partial<Auth>) {
    Object.assign(this, partial);
  }
}
