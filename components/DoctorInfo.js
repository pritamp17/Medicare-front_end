import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const DoctorInfo = ({name, len}) => {

  //  console.log("object");
  //  console.log(info);
  let lenthi=0;
  if(len){
    lenthi = len.length;
  }else{
    lenthi = 0;
  }
  return ( 
    <>
      <Card className="p-2 m-5">
        <Card.Img className="rounded p-5 pb-0" variant="top" src="/doctor.jpg" />
        <Card.Body>
          <Card.Title className="fw-bolder text-primary text-center m-0 p-0">Dr. {name}</Card.Title>
          <Card.Text className="fw-bold fs-6 text-center m-0 p-0">Dermatologists</Card.Text>
          <hr />
          <Row>
            <Col>
              <p className="fw-bolder fs-4 text-primary m-0 p-0">{lenthi}</p>
              <p className="m-0 p-0">Appointments</p>
            </Col>
            <Col>
              <p className="fw-bolder fs-4 text-primary m-0 p-0">{lenthi}</p>
              <p className="m-0 p-0">Total Patient</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default DoctorInfo;
