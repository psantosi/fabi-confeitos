import { FormControl } from '@angular/forms';

export interface IAddProductForm {
  productTypeId: FormControl<number | null>;
  productId: FormControl<number | null>;
  quantity: FormControl<number | null>;
}