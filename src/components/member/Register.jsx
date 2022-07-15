import React from 'react';
import { useState } from 'react';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch()

  const regieter = (name, email, password) => {
    dispatch(regieter(name, email, password));
  }




  return (
    <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>名字</Form.Label>
            <Form.Control type="text" placeholder="輸入名字" value={name} onChange={e => setName(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>信箱</Form.Label>
            <Form.Control type="email" placeholder="輸入信箱" value={email} onChange={e => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control type="password" placeholder="輸入密碼" value={password} onChange={e => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>確認密碼</Form.Label>
            <Form.Control type="password" placeholder="再次輸入密碼" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
          </Form.Group>

          

          <Button variant="primary" type="submit" onClick={() => regieter(name, email, password)}>
            Submit
          </Button>
      </Form>
    </Container>




  


    
  );
}

export default Register