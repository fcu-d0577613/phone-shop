import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';
import CartItem from './CartItem';


const Cart = () => {
  let products = useSelector((state) => state.handleCart);
  console.log(typeof(products));
  console.log(products);
  return (
   <>
    {products.map((product)=>   {
      return <CartItem key={product.id} product={product}/>;
    })}
    </>
  )
}

export default Cart