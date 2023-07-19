import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport/dist';
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtGuard extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'naufal',
    });
  }
  async validate(payload: any) {
    return {
      UserId: payload.id,
      UserName: payload.username,
      UserPhone: payload.phone,
      UserEmail: payload.email,
      FirstName: payload.firstName,
      LastName: payload.lastName,
    };
  }
}
