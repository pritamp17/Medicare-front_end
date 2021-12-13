import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../components/Header";

function signUp() {
  return (
    <>
      <Header id="1" />
      <wrapper>
        <Container className="border border-danger border-4">
          <Form className="my-5">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Row classname="mb-3">
              <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="mobile" placeholder="Mobile Number" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label> Work Experience </Form.Label>
                <Form.Control type="email" placeholder="Work Experience" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Specialization</Form.Label>
                <Form.Control type="password" placeholder="Specialization" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Please Upload proof of Specialization in PDF format</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <FloatingLabel controlId="floatingSelect" label="Gender" className="mb-3">
              <Form.Select aria-label="Floating label select example">
                {/* <option>Gender</option> */}
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Gender Neutral</option>
              </Form.Select>
            </FloatingLabel>

            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Choose Profile Photo</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" className="md-3">
            Sign Me Up
          </Button>
        </Container>
      </wrapper>
    </>
  );
}

export default signUp;

const wrapper = styled.section`
  /* width: 100px; */
  /* display: flex;
 flex: 1; */
  /* flex-direction: row; */
  justify-content: center;
  margin-top: 55px;
`;
