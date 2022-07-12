import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import "../../style/style.css";



const MyTicket = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    
    <Container>
      <Row className="d-flex m-3">
        <Col xs={6}>
          <img className=" MyTicket_img1 " src="/images/1月有氧課表.png" alt="" />
        </Col>

        <Col xs={6}>
          <Card className='position-relative pb-5'>
              <Card.Header>SHAWN STUDIO</Card.Header>
              <Card.Body>

                <Card.Title>有氧課程</Card.Title>

                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>

                <Button className="w-80 position-absolute mb-md-5 mx-md-3 end-0" variant="primary">立即使用</Button>
            </Card.Body>
          </Card>
        </Col>


        
      </Row>
      

    </Container>
  )
}

export default MyTicket