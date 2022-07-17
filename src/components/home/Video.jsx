import React from 'react'
import {Card, Button, Container, Row, Col }from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import "../../style/style.css";


const news = () => {
  return (
    <>
      
      <Container className='p-3 '>
        <Row className='text-lg-start text-center '>
          <Col lg={12} xl={6} className='' >
            <h1 className='fw-bold pt-md-5'>SHAWNSTUDIO</h1>
            <h5 className='fw-bold mb-md-5'>【聖誕特輯】</h5>
            <p className='fw-bold pt-3'>
                  轉眼間來到2021最後一個月份
                  大家是不是都在等一個人的出現呢？
                  沒錯，就是他！
                  十二月是聖誕老公公最忙碌的時節
                  其實要當一個聖誕老公公真的不容易
                  要開夜車駕雪橇、扛禮物袋爬煙囪
                  是個非常需要強大體能跟肌耐力的工作
                  如果平常沒有健身習慣
                  一定會忙不過來又腰痠背痛
                  讓我們來看看聖誕老公公的健身日常吧！
                  也祝福大家在聖誕節都能收到心想事成的禮物唷🎁</p>
            <a className='text-decoration-none sbtn p-2 ' href="#">立即預約</a>
            
          </Col>
          <Col lg={12} xl={6} className='mt-5'>
          <video className='videoWidth'  controls>
            <source src="/images/0914.mp4" type="video/mp4" />

            Your browser does not support HTML video.
          </video>

          </Col>
        </Row>
      </Container>
    </>

  )
}

export default news