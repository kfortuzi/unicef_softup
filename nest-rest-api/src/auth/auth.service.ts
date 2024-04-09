import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from '../commons/utils/hash';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    if (!email || !pass) return null;
    const user = await this.userRepository.findVerifiedUser(email);
    if (!user) throw new BadRequestException('User not confirmed!');

    const isMatch = await compareHash(pass, user.password);

    if (!isMatch) return null;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
