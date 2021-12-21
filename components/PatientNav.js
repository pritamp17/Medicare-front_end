import * as React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
const PatientNav = (props) => {
	return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" className="justify-content-center">
        <Container fluid>
          <Navbar.Brand href="#" className="fs-4 fw-bold">
            <LocalHospitalIcon color="success" fontSize="large" className="mx-1" />
            Medicare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <InputGroup className="mb-2">
                <FormControl type="search" placeholder="Find Doctor" aria-label="Search" />
                <InputGroup.Text className="me-2">
                  <PersonSearchIcon />
                </InputGroup.Text>
              </InputGroup>
              <Button type="submit" variant="outline-success" className="btn-primary text-light mb-2">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default PatientNav;