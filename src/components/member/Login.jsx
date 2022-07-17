import React from 'react';
import { useState } from 'react';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "../../style/style.css";





const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function onSubmit(event){
    event.preventDefault();
    const form = new FormData(event.target);
    
    const data = Object.fromEntries(form.entries());
    console.log(data);
  }


  return (
    <div className='mainBG fill-window text-light'>

      <Container>
      <Row className="d-flex justify-content-center">
        <Col s={12} md={6}>
        
          <Form className="mt-5 mx-3">
          
            
            <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={onSubmit}>
              <Form.Label>信箱</Form.Label>
              <Form.Control name="myEmail" type="email" placeholder="輸入信箱" value={email}required onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control name="myPassword" type="password" placeholder="輸入密碼" value={password}required onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

          

            

            <Button variant="primary" type="submit" >
              Submit
            </Button>
        </Form>

        </Col>
      </Row>
    </Container>
  </div>

    
  );
}

export default Login