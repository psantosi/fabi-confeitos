import { FormControl } from '@angular/forms';

export interface IAddProductForm {
  productTypeId: FormControl<number | null>;
  productId: FormControl<number | null>;
  quantity: FormControl<number | null>
}

export interface IProductsAdded {
  id : number,
  type: string | undefined,
  product: string,
  quantity: number | undefined | null
}