import { Routes } from '@angular/router';

export const routes: Routes = [
  // Adicione este bloco
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES)
  }
  // Outras rotas virão aqui depois
];
