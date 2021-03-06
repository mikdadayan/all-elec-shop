import CartActionTypes from './cart.types';
import { AnyAction } from 'redux';
import { CartProductType } from '../config';
const { CART_ADD_ITEM, CART_REMOVE_ITEM } = CartActionTypes;

const INITAL_STATE: {
  cartItems: CartProductType[];
} = {
  cartItems: [],
};

export const cartReducer = (state = INITAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existsItem = state.cartItems.find(
        (cartItem: CartProductType) => cartItem.product === item.product
      );

      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem: CartProductType) =>
            cartItem.product === (existsItem as CartProductType).product
              ? item
              : cartItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return { ...state };
  }
};
