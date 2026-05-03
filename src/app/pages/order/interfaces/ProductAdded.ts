export interface IProductsAdded {
  id : number;
  type: string | undefined;
  product: string;
  quantity: number;
  value: number;
  price: number;
  unit: string;
}