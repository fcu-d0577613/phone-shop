import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';


const Cart = () => {
  let product = useSelector((state) => state.handleCart);
  return (
    <Container>
      <Row>
        <Col md={4}>
          <img src={product.image} alt={product.title} height="200px" width="180px" />
        </Col>
        <Col md={4}>
          <h3>{product.title}</h3>
          <p className='lead fw-bold'>
            {product.qty} x ${product.price} = ${product.qty * product.price}
          </p>
          <button className='btn btn-outline-dark me-4'
            onClick={() => handleButton(product)}
          > - </button>
          <button className='btn btn-outline-dark me-4'
            onClick={() => handleButton(product)}
          > + </button>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart