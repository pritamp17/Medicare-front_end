import * as React from "react";
import { Navbar, Nav, Container, Button, Card, Row, Col } from "react-bootstrap";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const Header = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
    <Container>
      <Navbar.Brand href="/" className="fw-bold fs-3">
        {/* <LocalHospitalIcon color="success" fontSize="large" className="mx-1" /> */}
        Medicare
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          {props.id == "0" || props.id == "2" ? (
            <Button variant="outline-primary" className="mx-2 text-white" color="black" href="/doctors/signUp">
              Continue as a Doctor
            </Button>
          ) : null}
          {props.id == "0" || props.id == "3" ? (
            <Button variant="outline-primary" className="mx-2 text-white" color="black" href="/login">
              Login
            </Button>
          ) : null}
          {props.id == "0" || props.id == "1" ? (
            <Button variant="outline-primary" className="mx-2 text-white" href="/patients/signUp">
              Continue as a Patient
            </Button>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
