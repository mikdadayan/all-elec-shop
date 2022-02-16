import axios from 'axios';
import CartActionTypes from './cart.types';
import { ProductType } from '../../db-data/config';

const { CART_ADD_ITEM, CART_REMOVE_ITEM } = CartActionTypes;

export const addToCart =
  (id: string, qty: number) => async (dispatch: any, getState: any) => {
    const data: ProductType = (await axios.get(`/api/products/${id}`)).data;
    console.log(getState());
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
export const removeFromCart =
  (id: string) => (dispatch: any, getState: any) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
