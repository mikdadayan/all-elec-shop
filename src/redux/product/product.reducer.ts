import { AnyAction } from 'redux';
import ProductActionTypes from './product.types';
import { ProductType } from '../../db-data/config';

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } =
  ProductActionTypes;

const INITAL_STATE: {
  products: ProductType[];
  loading: boolean;
  error: string;
} = {
  products: [],
  loading: false,
  error: '',
};

export const productListReducer = (state = INITAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};
