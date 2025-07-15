import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginForm = new FormGroup({
    usernameBox: new FormControl('', [Validators.required]),
    psswdBox: new FormControl('', [Validators.required])
  });

  onSubmit() {
    const {usernameBox, psswdBox} = this.loginForm.value;

    console.log(`Username entered: ${usernameBox}`);
    console.log(`Password entered: ${psswdBox}`);
  }
}
