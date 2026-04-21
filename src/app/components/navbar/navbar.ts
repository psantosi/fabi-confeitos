import { Component, inject } from '@angular/core';
import { ResolveFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private router = inject(Router);
  isCollapsed = false;
  
  isRouteActive = (route: string) => {
    return this.router.url.match(route);
  }

  getTitle = () => {
    const route = this.router.url.split('/')[1];
    switch (route) {
      case 'home':
        return 'Inicio';
      case 'entreprise':
        return 'Empresa';
      case 'products':
        return 'Produtos';
      case 'order':
        return 'Pedido';
      default:
        return '';
    }
  }
}
