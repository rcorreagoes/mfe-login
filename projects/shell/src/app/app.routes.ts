import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'change-password',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4205/remoteEntry.json',
        exposedModule: './ChangePassword',
      }).then((m) => m.ChangePassword),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4205/remoteEntry.json',
        exposedModule: './ForgotPassword',
      }).then((m) => m.ForgotPassword),
  },
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4205/remoteEntry.json',
        exposedModule: './Login',
      }).then((m) => m.Login),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
  },
];
