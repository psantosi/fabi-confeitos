import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  title = input<string>();
  description = input<string>();
  imageUrl = input<string>();
  price = input<string>();
}
