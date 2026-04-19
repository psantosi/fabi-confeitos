import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private router = inject(Router);

  isRouteActive = (route: string) => {
    console.log('Current URL:', this.router.url);
    return this.router.url.match(route);
  }
}

