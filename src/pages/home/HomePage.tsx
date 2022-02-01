import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductType } from '../../db-data/config';
import Product from '../../components/product/Product';
import products from '../../db-data/products';

const HomePage: React.FC = () => {
  return (
    <div>
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product: ProductType) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
              <h3>{product.name}</h3>
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
};

export default HomePage;
