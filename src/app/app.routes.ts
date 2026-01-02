import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'sell',
    loadComponent: () => import('./sell/sell.page').then((m) => m.SellPage),
  },
  {
    path: 'cars',
    loadComponent: () => import('./cars/cars.page').then((m) => m.CarsPage),
  },
  {
    path: 'car/:id',
    loadComponent: () => import('./car-detail/car-detail.page').then((m) => m.CarDetailPage),
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then((m) => m.AdminPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
