import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router";
import {Card, Container, Row, Col, Button, Dropdown }from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTicket } from '../../redux/action';

import {v1 as uuid} from "uuid";

import '../../style/abericTable.css'
import '../../style/App.css';
import '../../style/style.css';

function AbericCrad({title, text, label, allclass}) {
  let [courseData, setCourseData] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();


  useEffect( () => {
    console.log(courseData);
  },[courseData])

  const bookingalert = () => {
    dispatch(addTicket({id:uuid(), name: courseData}));
    alert("預約成功");
    navigate("/myticket")
  }



  return (
    <Card className="mb-2">
    <Card.Header> JIMGYM</Card.Header>
    <Card.Body>
      <Card.Title> {title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      
      
      <Row className=" d-flex align-items-center">
        <Col md={2} className="mx-0  ">
              <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {label}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    allclass.map( (item, index) => 
                      <Dropdown.Item key={item} 
                                     onClick={e => setCourseData(item)} 
                                     href="#/action-1"> 
                                     
                                    
                        {item}</Dropdown.Item>
                    )
                  }
                  
                </Dropdown.Menu>
              </Dropdown>
        </Col>

        <Col md={10} className="d-flex ">
          <div className="border abericClassName   my-0 ms-0 me-2">{courseData? courseData :  ""} </div>
          <button onClick={bookingalert} 
            className=" abericClassButtonBook  ">預約</button>
        </Col>
      </Row>
      
      
    </Card.Body>
    </Card>  

              
           
  )
}

export default AbericCrad