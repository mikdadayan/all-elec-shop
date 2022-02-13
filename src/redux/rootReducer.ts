import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './product/product.reducer';
const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
