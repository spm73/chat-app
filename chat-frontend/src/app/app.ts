import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginForm } from './login-form/login-form';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
