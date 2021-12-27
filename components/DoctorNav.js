import * as React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useState } from "react";
import EditDoctorInfo from "./EditDoctorInfo";

const DoctorNav = (props) => {
  const data = props.data;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" className="justify-content-center">
        <Container fluid>
          <Navbar.Brand href="/doctors" className="fs-4 fw-bold m-auto">
            <LocalHospitalIcon color="success" fontSize="large" className="mx-1" />
            Doctor's DashBoard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Text className="m-auto fs-4 text-light p-auto">Hello, Dr. {data.name}</Navbar.Text>
            <Button variant="outline-success" className="btn-primary text-light ms-auto me-2" onClick={handleShow}>
              Update profile
            </Button>
            <Button type="submit" variant="outline-danger" className="btn-secondary text-light" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
          <EditDoctorInfo data={data} show={show} handleClose={handleClose}/>
        </Container>
      </Navbar>
    </>
  );
};
export default DoctorNav;
