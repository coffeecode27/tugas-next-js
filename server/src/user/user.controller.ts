import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private authService: UserService) {}

  @Post('signup')
  public async signUp(@Body() fields: any) {
    return this.authService.signup(fields);
  }
  @UseGuards(AuthGuard('local'))
  @Post('signin')
  public async signIn(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  public async getProfile(@Request() req) {
    return req.user;
  }

  /**
   *  @Post('signin')
  public async signIn(
    @Body('name') name: string,
    @Body('password') password: string,
  ) {
    return this.authService.validateUser(name, password);
  }
   */
}
