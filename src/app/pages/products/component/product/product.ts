import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [ CurrencyPipe ],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  title = input<string>();
  description = input<string>();
  imageUrl = input<string>();
  price = input<number>();
  unit = input<string>()
}
