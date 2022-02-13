import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../../components/rating/Rating';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import { listProductDetails } from '../../redux/product/product.action';
import { ProductType } from '../../db-data/config';

interface Product {
  product: ProductType;
  loading: boolean;
  error: string;
}
interface RootState {
  productDetails: Product;
}

const ProductPage: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(
    (state: RootState) => state.productDetails
  );
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(`${params.id}`));
  }, [dispatch, params]);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        product && (
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color='#ffea00'
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: ${product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price: </Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status: </Col>
                      <Col>
                        <strong>
                          ${product.countInStock ? 'In Stock' : 'Out Of Stock'}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className='btn btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )
      )}
    </>
  );
};

export default ProductPage;
