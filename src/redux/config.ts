import { ProductType } from '../db-data/config';

export interface CartProductType extends ProductType {
  qty: number;
  product: string;
}

export interface ProductList {
  products: ProductType[];
  loading: boolean;
  error: string;
}

export interface RootState {
  productList: ProductList;
  cart: CartProductType[];
}
