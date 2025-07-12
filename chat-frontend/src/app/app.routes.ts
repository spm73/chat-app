import { Routes } from '@angular/router';
import { LoginForm } from './login-form/login-form';

export const routes: Routes = [
    {
        path: '',
        component: LoginForm,
        title: 'Log In'
    }
];
