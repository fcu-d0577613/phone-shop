import React from 'react';
import { useState } from 'react';
import { Container, Form, Card, Button, Row, Col, FormGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "../../style/style.css";






const Register = () => {
  // const dispatch = useDispatch()
  // const regieter = (name, email, password) => {
  //   dispatch(regieter(name, email, password));
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  /**
   * @param {Event} event
   */

  function onsubmit(event){
    event.preventDefault();
    
    console.log("apple");
    
    const form = new FormData(event.target);
    
    const data = Object.fromEntries(form.entries());
    console.log(data);
    

    // for(const [key, value] of form.entries()){
    //   const hasFilled = Boolean(value)
    //   console.log(key, hasFilled);
    // }

  }




  return (
    <div className='mainBG fill-window text-light'>

    <Container>
      <Row className="d-flex justify-content-center">
        <Col s={12} md={6}>
        
          <Form className="mt-5 mx-3" onSubmit={onsubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>名字</Form.Label>
              <Form.Control name="myName"  type="text" placeholder="輸入名字" value={name} required onChange={e => setName(e.target.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>信箱</Form.Label>
              <Form.Control  name="myEmail" type="email" placeholder="輸入信箱" value={email} required  onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control  name="myPasseord" type="password" placeholder="輸入密碼" value={password} required  onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>確認密碼</Form.Label>
              <Form.Control   name="PasswordAgain"  type="password" placeholder="再次輸入密碼" value={confirmPassword} required  onChange={e => setConfirmPassword(e.target.value)}/>
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

export default Register