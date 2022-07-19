import React from 'react'
import {Card, Button, Container, Row, Col }from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../../style/Home.css";


const NewsCard = ({title, text, newsImg}) => {
  console.log(title);

  return (
    <>
     

        <Card className="shadow m-3 cardWidth" >
          <Card.Img variant="top" src={{newsImg}}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Button className="w-100 " variant="primary">立即預約</Button>
          </Card.Body>
        </Card>

    </>

  )
}

export default NewsCard