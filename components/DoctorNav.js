import * as React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const DoctorNav = (props) => {
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" className="justify-content-center">
        <Container fluid>
          <Navbar.Brand href="/patients" className="fs-4 fw-bold m-auto">
            <LocalHospitalIcon color="success" fontSize="large" className="mx-1" />
            Doctor's DashBoard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Text className="m-auto fs-4 text-light p-auto">Hello, Dr. Pritam Pawar</Navbar.Text>
            <Button type="submit" variant="outline-danger" className="btn-secondary text-light ms-auto" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default DoctorNav;
