import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginForm = new FormGroup({
    usernameBox: new FormControl(''),
    psswdBox: new FormControl('')
  });

  onSubmit() {
    const {usernameBox, psswdBox} = this.loginForm.value;

    console.log(`Username entered: ${usernameBox}`);
    console.log(`Password entered: ${psswdBox}`);
  }
}
