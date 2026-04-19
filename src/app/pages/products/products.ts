import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './interfaces/Product';
import { IProductList } from './interfaces/ProductList';
import { Product } from './component/product/product';
import { ProductList } from '../../shared/mocks/product-list.mock';

@Component({
  selector: 'app-products',
  imports: [ CommonModule, Product],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  tabs: IProductList[] = ProductList;
  productsSelected: IProduct[] = [];
  tabRouteSelected = this.activatedRoute.snapshot.paramMap.get('tab');

  ngOnInit() {
    this.tabSelect(this.tabRouteSelected || 'cake')
  }

  tabSelect(tab: string) {
    this.tabRouteSelected = tab;
    this.productsSelected = this.tabs.find(t => t.route === tab)?.products || [];
    this.router.navigate(['/products', tab]);
  }

}
