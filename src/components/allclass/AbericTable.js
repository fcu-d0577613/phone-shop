import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router";
import {Card, Container, Row, Col, Button, Dropdown }from 'react-bootstrap';
import AbericCrad from "../allclass/AbericCrad";
import  AbericAllCalss  from "../allclass/AbericAllCalss.json";

// import CourseService from "../../services/course.service";
import '../../style/abericTable.css'
import '../../style/App.css';
import "../../style/style.css";


function AbericTable() {
  let {currentUser, setCurrentUser} = useState("")
  let [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();



  return (
    <div className="mainBG ">

      <Container >
        <Row className="pt-5 text-dark">
          <Col lg={12} xl={6}>
            <div className='pic'>
              <img className='abericTable-pic' 
              src={"images/1月有氧課表.png"}  />
            </div>   
          </Col>

          <Col lg={12} xl={6}>
              {AbericAllCalss.map( info => <AbericCrad key={info.id}{...info} />  )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AbericTable