import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// auth is prefix of all routes in this controller
// for example, if you have a route like this: @Post('signup'), the full route will be /auth/signup
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp() {
    return this.authService.signUp();
  }

  @Post('signin')
  signIn() {
    return this.authService.login();
  }
}
