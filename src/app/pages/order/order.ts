import { Component, inject } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { IProductList } from '../../shared/interfaces/ProductList';
import { ProductList } from '../../shared/mocks/product-list.mock';
import { IProduct } from '../../shared/interfaces/Product';
import { IProductType } from '../../shared/interfaces/ProductType';
import { IAddProductForm } from './interfaces/AddProductForm';
import { OrderService } from './services/order.service';
import { CurrencyPipe, formatCurrency } from '@angular/common';
import { IProductsAdded } from './interfaces/ProductAdded';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule, CurrencyPipe, NgxMaskDirective],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  orderService: OrderService = inject(OrderService);

  productsList: IProductList[] = ProductList
  productsTypes: IProductType[] = this.productsList.map(p => ({ id: p.id, name: p.name }));
  productTypeSelected?: IProductType;
  productsSelected: IProduct[] = [];
  productSelected?: IProduct;
  productsAdded: IProductsAdded[] = [];
  productAddedId: number = 1;
  totalValue: number = 0;

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    observation: new FormControl(''),
  });

  addProductForm = new FormGroup<IAddProductForm>({
    productTypeId: new FormControl(null, [Validators.required]),
    productId: new FormControl({value: null,  disabled: true }, [Validators.required]),
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  selectProducts() {
    const productTypeIdSelected = this.addProductForm.get('productTypeId')?.value;

    if (!productTypeIdSelected) {
      return;
    }

    const productList: IProductList | undefined = this.productsList.find(p => p.id === Number(productTypeIdSelected));

    if (productList) {
      this.productTypeSelected = { id: productList.id, name: productList.name };
      this.productsSelected = productList.products || [];
      this.addProductForm.get('productId')?.enable();
    }
  }

  clearOrderForm() {
    this.orderForm.reset();
    this.productsSelected = [];
    this.productsAdded = [];
    this.addProductForm.get('productId')?.disable();
    this.addProductForm.get('quantity')?.setValue(1);
    this.addProductForm.get('productTypeId')?.setValue(null);
    this.addProductForm.get('productId')?.setValue(null);
    this.productAddedId = 1;
  }

  clearAddProductForm() {
    this.addProductForm.get('productId')?.disable();
    this.productsSelected = [];
    this.addProductForm.get('quantity')?.setValue(1);
    this.addProductForm.get('productTypeId')?.setValue(null);
    this.addProductForm.get('productId')?.setValue(null);
  }

  addProduct() {
    const productId = this.addProductForm.get('productId')?.value;
    const quantity = this.addProductForm.get('quantity')?.value || 0;

    if (!productId) {
      return;
    }

    const product: IProduct | undefined = this.productsSelected.find(p => p.id === Number(productId));
    
    if (product) {
      this.productSelected = product;
      const value: number = this.productSelected.price * quantity;

      this.productsAdded.push({
        id: this.productAddedId,
        type: this.productTypeSelected?.name,
        product: this.productSelected.title,
        price: this.productSelected.price,
        unit: this.productSelected.unit,
        quantity,
        value,
      });

      this.productAddedId++;
      this.totalValue += value;

    }

    this.clearAddProductForm();
  }

  submitOrder() {
    const order: string = this.buildOrder();

    const orderDTO = {
      name: this.orderForm.get('name')?.value,
      email: this.orderForm.get('email')?.value,
      phone: this.orderForm.get('phone')?.value,
      obs: this.orderForm.get('observation')?.value || '-',
      totalValue: this.getFormattedCurrency(this.totalValue),
      order,
    }

    this.orderService.sendOrder(orderDTO).subscribe(() => {
      this.clearOrderForm();
    });
  }

  buildOrder(): string {
    let order: string = '\n';
    let index: number = 1; 

    this.productsAdded.forEach(product => {
      order += `${index} - ${product.product} - Quantidade: ${product.quantity} ${product.unit} - Valor: ${this.getFormattedCurrency(product.value)}\n`;
      index++;
    });

    return order;
  }

  getFormattedCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  removeProduct(product: IProductsAdded ) {
    this.productsAdded = this.productsAdded.filter(productAdded => productAdded.id !== product.id );
    this.totalValue -= product.value;
  }

  removeQuantity(id: number, quantity: number ) {
    if (quantity === 1) {
      return;
    }

    this.productsAdded.forEach(product => {
      if (product.id === id) {
        product.quantity -= 1;
        product.value = product.price * product.quantity;
        this.totalValue -= product.price;
      }
    });
  }

  addQuantity(id: number ) {
    this.productsAdded.forEach(product => {
      if (product.id === id) {
        product.quantity += 1;
        product.value =  product.price * product.quantity;
        this.totalValue += product.price;
      }
    });
  }
}