import React, { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "../../style/style.css";
import MyTicketItem from './MyTicketItem';


const MyTicket = () => {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  let tickets = useSelector(state => state.TicketList);
  



  return (
    <div className='mainBG ticket-window'>

      <Container>
        <Row className="d-flex  pt-5 text-lg-start text-center">
          <Col  lg={12} xl={6} className="text-light">
              <div className='MyTicket-nitice'>
                <div className='notice-box'>
                  <h1>注意事項</h1>
                  <ul className="notice-item">
                    <li>為確保上課品質，進入教室請將手機靜音，本館禁止飲食，感謝您的支持與配合。</li>
                    <li>本館保留變更師資與課程內容的權利，請隨時注意課程變動的最新消息。</li>
                    <li>為確保每位學員的權益，請勿隨意移動或是佔用周遭無人使用的席位，造成您的不便敬請見諒。</li>
                    
                    
                  </ul>
                </div>
              </div>
            {/* <img className=" MyTicket_img1 " src="/images/1月有氧課表.png" alt="" /> */}
          </Col>

          <Col lg={12} xl={6} className="">
            {tickets.map((ticket)=>   {
                  return <MyTicketItem key={ticket.id} ticket={ticket}/>;
              })}
            
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default MyTicket