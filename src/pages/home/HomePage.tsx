import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { ProductType } from '../../db-data/config';
import { RootState } from '../../redux/config';
import Product from '../../components/product/Product';
import { listProducts } from '../../redux/product/product.action';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state: RootState) => state.productList
  );
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product: ProductType) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
              <h3>{product.name}</h3>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
