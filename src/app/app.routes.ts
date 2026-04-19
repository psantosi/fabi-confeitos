import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Enterprise } from './pages/enterprise/enterprise';
import { Products } from './pages/products/products';
import { Order } from './pages/order/order';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'entreprise',
        component: Enterprise,
    },
    {
        path: 'products/:tab',
        component: Products,
    },
    {
        path: 'order',
        component: Order,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
