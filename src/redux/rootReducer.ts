import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './product/product.reducer';

import { cartReducer } from './cart/cart.reducer';
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
