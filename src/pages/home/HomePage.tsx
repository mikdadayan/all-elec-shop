import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../products';

interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const HomePage = () => {
  return (
    <div>
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product: Product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <h3>{product.name}</h3>
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
};

export default HomePage;
