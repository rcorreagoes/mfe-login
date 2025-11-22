import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./views/login/login').then((m) => m.Login),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./views/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },
  {
    path: 'change-password',
    loadComponent: () =>
      import('./views/change-password/change-password').then((m) => m.ChangePassword),
  },
];
