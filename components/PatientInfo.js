import  React from "react";
import { Card, Button, Table } from "react-bootstrap";
import EditPatientInfo from "./EditPatientInfo";
import { useEffect } from "react";
import * as axios from 'axios';
import { useState } from "react";

const PatientInfo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [object, setObject] = useState({});
  const email = 'pritampawar625@gmail.com'

  useEffect(() => {
    axios.get('http://localhost:9000/patient/pritampawar625@gmail.com')
    .then(response => {
       setObject(response.data);
        // console.log(object);
    })
  }, [])

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
                <td>{object.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{object.email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{object.gender}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{object.age}</td>
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
      <EditPatientInfo email ={object.email} show={show} handleClose={handleClose} />
    </>
  );
};

export default PatientInfo;
