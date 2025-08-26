import { Routes } from '@angular/router';
import { Login } from './login/login';


export const AUTH_ROUTES: Routes = [
  {
    path: 'login', // Rota para /auth/login
    component: Login
  },
  {
    path: '', // Se o usuário acessar apenas /auth
    redirectTo: 'login', // Redireciona para /auth/login
    pathMatch: 'full'
  }
];
