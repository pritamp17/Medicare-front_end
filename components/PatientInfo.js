import * as React from "react";
import { Card, Button, Table } from "react-bootstrap";
import { useState } from "react";
import EditPatientInfo from "./EditPatientInfo";

const PatientInfo = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "20rem" }} className="shadow p-3 mb-5 bg-body rounded">
        <Card.Img variant="top" src="/patient.jpg" style={{ height: "15rem" }} />
        <Card.Body className="text-center">
          <Card.Title>Personal Information</Card.Title>
          <Table borderless hover size="sm" className="table-borderless">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Pritam Pawar</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>cheemu@gmail.com</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Male</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>21</td>
              </tr>
              <tr>
                <td>Blood group</td>
                <td>O+</td>
              </tr>
              <tr>
                <td>Heigth</td>
                <td>165</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>70</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Body className="text-center" className="m-0 p-0">
          <Button variant="success mx-3" onClick={handleShow}>
            Update profile
          </Button>
          <Button variant="danger">Logout</Button>
        </Card.Body>
      </Card>
      <EditPatientInfo show={show} handleClose={handleClose} />
    </>
  );
};

export default PatientInfo;
