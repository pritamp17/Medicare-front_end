import { Card, Col, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../components/Header";

function signUp() {
  return (
    <>
      <Header id="2" />;
      <wrapper>
        <Card style={{ width: "80rem" }} bg="light" border="dark" text="dark">
          <Form>
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

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="password" placeholder="Mobile Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
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
        </Card>
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
