import React, { useState,  } from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import "../../style/style.css";



const TrainList = () => {
  const products = useSelector(state => state.products);
  
  console.log(products);
  return (
    <div>
      <h1>123</h1>
      {
        products?.map(product => <div key={product.id}>{product.name}</div>)
      }
    </div>
    
  )
}

export default TrainList;