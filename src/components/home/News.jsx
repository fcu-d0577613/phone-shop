import React from 'react'
import {Card, Button, Container, Row, Col }from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../../style/Home.css";


const news = () => {
  return (
    <>
      <h1 className='display-6 fw-bolder text-center mt-5'>最新消息</h1>
      <hr className='container' />
      <Container className=' p-5 bg-danger d-flex flex-wrap justify-content-center'>

        <Card className="shadow m-3 cardWidth" >
          <Card.Img variant="top" src="/images/1006.png" />
          <Card.Body>
            <Card.Title>健身計畫</Card.Title>
            <Card.Text>
              健身計劃優惠專案 雙重好禮~~~~
            </Card.Text>
            <Button className="w-100 " variant="primary">立即預約</Button>
          </Card.Body>
        </Card>

        <Card className="shadow m-3 cardWidth" >
          <Card.Img variant="top" src="/images/1006.png" />
          <Card.Body>
            <Card.Title>健身計畫</Card.Title>
            <Card.Text>
              健身計劃優惠專案 雙重好禮~~~~
            </Card.Text>
            <Button className="w-100 " variant="primary">立即預約</Button>
          </Card.Body>
        </Card>

        <Card className="shadow m-3 cardWidth" >
          <Card.Img variant="top" src="/images/1006.png" />
          <Card.Body>
            <Card.Title>健身計畫</Card.Title>
            <Card.Text>
              健身計劃優惠專案 雙重好禮~~~~
            </Card.Text>
            <Button className="w-100 " variant="primary">立即預約</Button>
          </Card.Body>
        </Card>

      

      </Container>
    </>

  )
}

export default news