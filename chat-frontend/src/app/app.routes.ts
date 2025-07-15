import { Routes } from '@angular/router';
import { LoginForm } from './login-form/login-form';
import { RegisterForm } from './register-form/register-form';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterForm,
        title: 'Register'
    },
    {
        path: 'login',
        component: LoginForm,
        title: 'Log in'
    }
];
