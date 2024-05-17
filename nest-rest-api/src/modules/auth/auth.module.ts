import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Config } from 'config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: new Config().apiJwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, Config, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
