import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { Fuerzas } from './fuerzas/fuerzas.component';
import { Atomos } from './atomos/atomos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: Home,
        title: 'Inicio - Física y Química Huguini79'
    },
    {
        path: 'fuerzas',
        component: Fuerzas,
        title: 'Fuerzas - Física y Química Huguini79'
    },
    {
        path: 'atomos',
        component: Atomos,
        title: 'Átomos - Física y Química Huguini79'
    }
];
