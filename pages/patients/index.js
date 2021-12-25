import React from "react";
import PatientInfo from "../../components/PatientInfo";
import { Container, Row, Col } from "react-bootstrap";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PatientAppointment from "../../components/PatientAppointment";
import PatientVisitSummary from "../../components/PatientVisitSummary";
import PatientNav from "../../components/PatientNav";
import { useEffect } from "react";
import * as axios from 'axios';
import { useState } from "react";
 
const PatientDashboard = (props) => {
  const [object, setObject] = useState({});
  const [oppointment, setOppointment] = useState([])
  const email = 'pritampawar625@gmail.com' 

  useEffect(() => {
    axios.get('http://localhost:9000/patient/pritampawar625@gmail.com')
    .then(response => {
       setObject(response.data);
      //  console.log(object.appointments);
      setOppointment(object.appointments)
      // console.log(oppointment);
    }) 
  }, []) 

  return (
    <Container fluid>
      <Row> 
        <PatientNav className="mb-2" email={object.email}/>
      </Row>
      <Row>
        <Col md={3}>
          <PatientInfo />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={4}>
              <PatientVisitSummary number={29} text="Clinic Visits" icon={FactCheckIcon}></PatientVisitSummary>
            </Col>
            <Col md={4}>
              <PatientVisitSummary number={29} text="Clinic Visits" icon={FactCheckIcon}></PatientVisitSummary>
            </Col>
            <Col md={4}>
              <PatientVisitSummary number={29} text="Clinic Visits" icon={FactCheckIcon}></PatientVisitSummary>
            </Col>
          </Row>
          <Row>
            <PatientAppointment oppointment= {oppointment}></PatientAppointment>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PatientDashboard;

