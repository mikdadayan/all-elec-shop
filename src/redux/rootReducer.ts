import { combineReducers } from 'redux';
import { productListReducer } from './product/product.reducer';
const rootReducer = combineReducers({ productList: productListReducer });

export default rootReducer;
