import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { delTicket } from "../../redux/action"



const MyTicketItem = ({ticket}) => {

  const useMyTicket = () => {
    let check = window.confirm("確定立即使用?");
    if(check){
      dispatch(delTicket(ticket.id));
    }else{
      alert("取消成功");
    }
  }

const dispatch =useDispatch();
  
  return (
    <>
      <Card className='position-relative pb-5 mb-2'>
            <Card.Header>SHAWN STUDIO</Card.Header>
              <Card.Body>

                <Card.Title>{ticket.name}</Card.Title>

                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>

                <Button
                  onClick={useMyTicket}
                  className="w-80 position-absolute mb-md-5 mx-md-3 end-0" variant="primary">立即使用</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default MyTicketItem