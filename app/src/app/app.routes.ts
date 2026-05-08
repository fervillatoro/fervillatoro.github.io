import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'invitations/:id',
    loadComponent: () => import('./pages/invitations/invitations').then(m => m.Invitations)
  },
];
