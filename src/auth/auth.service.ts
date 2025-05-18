import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      message: 'Login successful',
    };
  }
  signUp() {
    return {
      message: 'Sign up successful',
    };
  }
}
