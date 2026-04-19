import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { IProductList, IProductType } from '../products/interfaces/ProductList';
import { ProductList } from '../../shared/mocks/product-list.mock';
import { IProduct } from '../products/interfaces/Product';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  productsList: IProductList[] = ProductList
  productsTypes: IProductType[] = this.productsList.map(p => ({ id: p.id, name: p.name }));
  productsSelected: IProduct[] = [];

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    productTypeId: new FormControl('', [Validators.required]),
    productId: new FormControl({value: '',  disabled: true }),
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    observation: new FormControl(''),
  });

  selectProducts() {
    const productTypeId = this.orderForm.get('productTypeId')?.value;
    
    if (!productTypeId) {
      this.productsSelected = [];
      return;
    }

    this.orderForm.get('productId')?.enable();
    this.productsSelected = this.productsList.find(p => p.id === +productTypeId)?.products || [];
  }

  submitOrder() {
    this.clearForm();
    alert('Pedido enviado com sucesso!');
  }

  clearForm() {
    this.orderForm.reset();
    this.productsSelected = [];
    this.orderForm.get('productId')?.disable();
    this.orderForm.get('quantity')?.setValue(1);
    this.orderForm.get('productTypeId')?.setValue('');
    this.orderForm.get('productId')?.setValue('');
  }

}