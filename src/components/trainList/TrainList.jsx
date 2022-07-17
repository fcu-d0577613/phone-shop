import React, { useState,  } from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import "../../style/style.css";
import Register from '../member/Register';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "../../style/style.css";




const TrainList = () => {
  
  return (
    <div className='mainBG text-light TrainListBG fill-window'>

      <Container  className=' TrainListBG'>
        <Row className='d-flex justify-content-center pt-5'>
          <Col s={12} md={6}>
            <TodoInput />
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
    

    
    
  )
}

export default TrainList;