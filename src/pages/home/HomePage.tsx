import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { ProductType } from '../../db-data/config';
import Product from '../../components/product/Product';
import { listProducts } from '../../redux/product/product.action';

interface ProductList {
  products: ProductType[];
  loading: boolean;
  error: string;
}
interface RootState {
  productList: ProductList;
}

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
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
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
