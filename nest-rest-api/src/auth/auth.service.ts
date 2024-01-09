import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    if (!email || !pass) return null;
    const user = await this.userService.findOneByEmail(email);
    if (!user || !user.confirmed_at) throw new BadRequestException('User not confirmed!');

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) return null;

    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
