import { Request } from '@nestjs/common';
type JwtPayload = {
  user: {
    id: string;
    email: string;
  };
};

export type RequestWithUser = Request & JwtPayload;
