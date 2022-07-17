import React from 'react'
import {Card, Button, Container, Row, Col }from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NewsCard from "../home/NewsCard";
import "../../style/Home.css";
import NewsCardInfo from "../home/NewsCardInfo.json";


const news = () => {
  console.log(NewsCardInfo);
  return (
    <>
      <h1 className='display-6 fw-bolder text-center mt-5'>最新消息</h1>
      <hr className='container' />
      <Container className=' p-5 text-dark d-flex flex-wrap justify-content-center'>

      {
        NewsCardInfo.map( (item, index) =>
          <NewsCard key={item.id} {...item} />
        )
      }
      
      

      </Container>
    </>

  )
}

export default news