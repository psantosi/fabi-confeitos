import { IProduct } from "./Product";

export interface IProductList {
    id: number;
    name: string;
    route: string;
    products: IProduct[];
}

