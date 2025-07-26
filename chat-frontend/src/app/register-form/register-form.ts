import { Component, inject, InjectionToken } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VALIDATORS } from './password-validators';

const PASSWORD_VALIDATORS = new InjectionToken<ValidatorFn[]>('./password-validators VALIDATORS');

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, RouterLink],
  providers: [{provide: PASSWORD_VALIDATORS, useValue: VALIDATORS}],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  passwordValidators = inject(PASSWORD_VALIDATORS, {self: true})

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', this.passwordValidators),
    confirmPassword: new FormControl('', Validators.required)
  }, passwordsDoNotMatchValidator);

  onSubmit() {
    const { username, password, confirmPassword: _ } = this.registerForm.value;
    console.log(username, password);
  }
}

const passwordsDoNotMatchValidator: ValidatorFn = control => {
  const psswdBox = control.get('password');
  const confirmPsswdBox = control.get('confirmPassword');
  return psswdBox?.value !== confirmPsswdBox?.value ? { passwordsDoNotMatch: { value: psswdBox?.value }} : null;
}