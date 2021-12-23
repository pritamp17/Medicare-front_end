import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { AppointmentList } from "../../components/AppointmentList";
import DoctorInfo from "../../components/DoctorInfo";
import DoctorNav from "../../components/DoctorNav";

function index() {
  return (
    <>
      <Container fluid>
        <Row>
          <DoctorNav />
        </Row>
        <Row></Row>
        <Row>
          <Col md={4}>
            <DoctorInfo className="m-5" />
            <AppointmentList className="m-5" />
          </Col>
          <Col md={8}>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default index;
