import React, { useState,  } from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import "../../style/style.css";
import Register from '../member/Register';



const TrainList = () => {
  const products = useSelector(state => state.products);
  const users = useSelector(state => state.products);
  
  console.log(products);
  return (
    <div>
      <h1>123</h1>
      {
        products?.map(product => <div key={product.id}>{product.name}</div>)
      }
      {
        users?.map(user => <div>{user.name}</div>)
      }

      <Register />
    </div>
    
  )
}

export default TrainList;