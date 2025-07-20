import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required].concat(toValidatorFns(
      [(psswd) => psswd.length >= 8, 'Password must have at least 8 characters'],
      [(psswd) => psswd.match(/\d/g) != null, 'Password must contain a digit'],
      [(psswd) => psswd.match(/[A-Z]/g) != null, 'Password must contain a capital letter'],
      [(psswd) => contains(psswd, '|@#~"·$%&/()=?¿\\€¡!\''.split('')), 'Password must contain a symbol']
    ))),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsDoNotMatchValidator });

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

function toValidatorFn(predicate: (_: string) => boolean, errorMsg: string): ValidatorFn {
  return control => {
    return predicate(control.value) ? null : { error: errorMsg };
  }
}

function toValidatorFns(...validators: [((_: string) => boolean), string][]): ValidatorFn[] {
  return validators.map(validator => toValidatorFn(validator[0], validator[1]));
}

function contains(str: string, chars: string[]): boolean {
  return str.split('').some(strChar => chars.some(char => char === strChar));
}