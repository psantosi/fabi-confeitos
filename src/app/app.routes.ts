import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Enterprise } from './pages/enterprise/enterprise';
import { Products } from './pages/products/products';
import { Order } from './pages/order/order';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
        title: 'Inicio'
    },
    {
        path: 'entreprise',
        component: Enterprise,
        title: 'Empresa'
    },
    {
        path: 'products/:tab',
        component: Products,
        title: 'Produtos'
    },
    {
        path: 'order',
        component: Order,
        title: 'Pedido'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
