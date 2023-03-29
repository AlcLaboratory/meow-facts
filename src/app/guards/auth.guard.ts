import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../store/user-store.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userStoreService: UserStoreService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    const user = this.userStoreService.getUser();

    if (!this.authService.isAuthenticated(user)) {
      this.router.navigate(['logowanie']);
      return false;
    }
    return true;
  }
}
