import { Injectable } from '@angular/core';
import { User } from '../intefaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly expectedUser: User = {
    login: 'test@test.pl',
    password: 'szkola_w_chmurze'
  }

  isAuthenticated(user: User): boolean {
   return user?.login === this.expectedUser.login && user?.password === this.expectedUser.password;
  }
}
