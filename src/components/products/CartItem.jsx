import React from 'react';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';


const CartItem = ({product}) => {
  return (
  <Container className="  mt-5">  
    <Row className='mb-3 border'>
            <Col md={4}>
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </Col>
            <Col md={8}>
              <h3>{product.title}</h3>
              <p className='lead fw-bold'>
                {product.qty} x ${product.price} = ${product.qty * product.price}
              </p>
              <button className='btn btn-outline-dark me-4'
                // onClick={() => handleButton(product)}
              > - </button>
              <button className='btn btn-outline-dark me-4'
                // onClick={() => handleButton(product)}
              > + </button>
            </Col>
    </Row>
  </Container>

  )
}

export default CartItem