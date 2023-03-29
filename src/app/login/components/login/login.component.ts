import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/intefaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/store/user-store.service';
import { LoginForm } from '../../forms/login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly loginForm = new LoginForm();

  constructor(
    private readonly authService: AuthService,
    private readonly userStoreService: UserStoreService,
    private readonly router: Router
  ) {}

  onLoginButtonClick(): void {
    const user: User = {
      login: this.loginForm.login.value,
      password: this.loginForm.password.value,
    };

    const userDataIsCorrect = this.authService.isAuthenticated(user);

    if (!userDataIsCorrect) {
      alert('Dane niepoprawne.')
      return;
    }

    this.userStoreService.setUser(user);
    this.navigateToMeowFacts();
  }

  private navigateToMeowFacts(): void {
    this.router.navigate(['kocie-fakty']);
  }
}
