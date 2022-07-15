import React from 'react'
import {Card, Button, Container, Row, Col, Carousel }from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../../style/Home.css";


const news = () => {
  return (
    <>
      <h1 className='display-6 fw-bolder text-center mt-5'>私人教練</h1>
      <hr className='container' />
      <Container className=' p-3   '>
        <Row  className='text-lg-start text-center mx-auto'>
          <Col lg={12} xl={6} className='pb-5  d-flex justify-content-center'>
          <Carousel className=' '>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block  Carouselteacherwidth  ms-5 mx-auto"
                  src="/images/coach1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block Carouselteacherwidth  ms-5 mx-auto"
                  src="/images/coach2.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block Carouselteacherwidth  ms-5 mx-auto"
                  src="/images/coach3.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col lg={12} xl={6} className="pb-5 d-flex align-items-center">
            <div>

              <h1 className='fw-bold '>SHAWNSTUDIO</h1>
                <h5 className='fw-bold mb-5'>私人教練</h5>
                <p className='fw-bold pt-0 '>
                      
                無論您正開始一個新的健身計畫，或者您可能已經運動一段時間了，我們相信一些幫助可以讓您達到期望的目標。我們的私人教練會根據您的需求及能力，設計一系列短期或長期的健身計畫 -
                                    無論您想身強體壯、提升運動表現、或在運動停滯一段時間或受傷後再慢慢恢復運動習慣。
                                    </p>
                <a className='text-decoration-none sbtn p-2' href="#">立即預約</a>
            </div>
          </Col>
        </Row>
      

      </Container>
    </>

  )
}

export default news