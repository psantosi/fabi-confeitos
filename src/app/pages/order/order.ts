import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { IProductList } from '../../shared/interfaces/ProductList';
import { ProductList } from '../../shared/mocks/product-list.mock';
import { IProduct } from '../../shared/interfaces/Product';
import { IProductType } from '../../shared/interfaces/ProductType';
import { IAddProductForm, IProductsAdded } from './interfaces/AddProductForm';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class Order {
  productsList: IProductList[] = ProductList
  productsTypes: IProductType[] = this.productsList.map(p => ({ id: p.id, name: p.name }));
  productTypeSelected?: IProductType;
  productsSelected: IProduct[] = [];
  productSelected?: IProduct;
  productsAdded: IProductsAdded[] = [];
  productAddedId: number = 1;

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
    const quantity = this.addProductForm.get('quantity')?.value;

    if (!productId) {
      return;
    }

    const product: IProduct | undefined = this.productsSelected.find(p => p.id === Number(productId));
    
    if (product) {
      this.productSelected = product;
      this.productsAdded.push({
        id: this.productAddedId,
        type: this.productTypeSelected?.name,
        product: this.productSelected.title,
        quantity,
      });

      this.productAddedId++;
    }

    this.clearAddProductForm();
  }

  submitOrder() {
    this.clearOrderForm();
    alert('Pedido enviado com sucesso!');
  }
}