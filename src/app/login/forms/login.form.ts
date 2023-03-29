import { FormControl, FormGroup, Validators } from "@angular/forms";

export class LoginForm extends FormGroup {
  constructor() {
    super({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  get login(): FormControl {
    return this.get('login') as FormControl;
  }

  get password(): FormControl {
    return this.get('password') as FormControl;
  }
}
