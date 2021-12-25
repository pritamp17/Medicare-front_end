import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { AppointmentList } from "../../components/AppointmentList";
import DoctorInfo from "../../components/DoctorInfo";
import DoctorNav from "../../components/DoctorNav";
import { useEffect } from "react";
import * as axios from 'axios';
import { useState } from "react";

function index() {
  const [object, setObject] = useState({});
  const email = 'pritampawar625@gmail.com'

  useEffect(() => {
    axios.get('http://localhost:9000/doctor/pritampawar625@gmail.com')
    .then(response => {
       setObject(response.data);
    })
  }, []) 

  // console.log(object);
  return ( 
    <>
      <Container fluid>
        <Row> 
          <DoctorNav />
        </Row> 
        <Row></Row>
        <Row>
          <Col md={4}>
            <DoctorInfo className="m-5" name={object.name} len = {object.appointments} />
          </Col>
          <Col md={8}>
            <Row>
              <Col><AppointmentList className="m-5"/> </Col>
            
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default index;
