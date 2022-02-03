import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductType } from '../../db-data/config';
import Product from '../../components/product/Product';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:2900/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product: ProductType) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
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
