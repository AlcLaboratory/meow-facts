import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../../forms/login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly loginForm = new LoginForm();

  constructor() { }

  ngOnInit(): void {
  }

  onLoginButtonClick(): void {

  }

}
