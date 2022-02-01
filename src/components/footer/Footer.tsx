import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: FC = () => {
  return (
    <footer>
      <Container className='text-center py-3'>
        <Row>
          <Col>Copyright &copy; All Electronics Shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
