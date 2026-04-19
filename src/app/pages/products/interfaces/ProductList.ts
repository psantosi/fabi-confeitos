import { IProduct } from "./Product";

export interface IProductList {
    id: number;
    name: string;
    route: string;
    products: IProduct[];
}

export interface IProductType {
    id: number;
    name: string;
}