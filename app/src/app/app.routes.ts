import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  // {
  //   path: 'invitations/:id',
  //   loadComponent: () => import('./pages/invitations/invitations').then(m => m.Invitations)
  // },

  {
    path: '**',
    loadComponent: () => import('./pages/error404/error404').then(m => m.Error404)
  },
];
