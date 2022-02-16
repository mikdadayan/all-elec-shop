import React, { useEffect } from 'react';
import { CartProductType, RootState } from '../../redux/config';

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/cart.action';

const CartPage: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const productId = params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const { cartItems } = cart;

  console.log('cartItems', cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>CartPage</div>;
};

export default CartPage;
