import React from 'react';
import { CartProductType, RootState } from '../../redux/config';

import { useDispatch, useSelector } from 'react-redux';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  return <div>CartPage</div>;
};

export default CartPage;
