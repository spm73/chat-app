import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', [weakPasswordValidator([
      (psswd) => psswd.length >= 8,
      (psswd) => contains(psswd, '0123456789'.split('')),
      (psswd) => contains(psswd, '|@#~"·$%&/()=?¿\\€¡!\''.split('')),
    ])]),
    confirmPassword: new FormControl('')
  }, { validators: passwordsDoNotMatchValidator });

  onSubmit() {
    const { username, password, confirmPassword: _ } = this.registerForm.value;
    console.log(username, password);
  }
}

const passwordsDoNotMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const psswdBox = control.get('password');
  const confirmPsswdBox = control.get('confirmPassword');
  return psswdBox?.value !== confirmPsswdBox?.value ? { passwordsDoNotMatch: { value: psswdBox?.value }} : null;
}

function weakPasswordValidator(predicates: ((_ :string) => boolean)[]): ValidatorFn {
  return (psswdBox: AbstractControl): ValidationErrors | null => {
    const psswd: string = psswdBox.value;
    const validation = predicates.every(predicate => predicate(psswd));
    return validation ? null : { weakPassword: { value: psswd }};
  }
}

function contains(str: string, chars: string[]): boolean {
  return str.split('').some(strChar => chars.some(char => char === strChar));
}