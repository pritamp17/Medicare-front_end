import * as axios from "axios";
import { useState } from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import Router from "next/router";
import styled from "styled-components";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { Doctor } from "../doctors/index";
import { PatientDashboard } from "../patients/index";

function signUp() {
  const session = useSelector((state) => state);
  const user = session.data.login;
  if (user) {
    if (user.isDoctor === true) {
      Router.push("/doctors");
      return null;
    } else if (user.isPatient === true) {
      Router.push("/patients");
      return null;
    }
  }
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("Male");
  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [photo, setPhoto] = useState("");
  const [Address, setAddress] = useState("");
  const [Address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();

    const postData = {
      email: Email,
      password: Password,
      name: Name,
      age: age,
      profile_pic: "https://imgur.com/yDuzhBE",
      mobile: mobile,
      gender: Gender,
      Address: Address,
      Address1: Address1,
      city: city,
      state: state,
      zip: zip,
    };
    console.log(postData);
    savePost(postData);

    setEmail("");
    setPassword("");
    setName("");
    setName("");
    setMobile();
    setGender("");
    setPhoto("");
    setAge("");
    setAddress("");
    setAddress1("");
    setCity("");
    setState("");
    setZip("");
  };

  const savePost = async (postData) => {
    await axios
      .post("http://localhost:9000/signup/patient", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
        componentDidMount();
      });
  };

  const componentDidMount = () => {
    const { pathname } = Router;
    if (pathname == "/patients/signUp") {
      Router.push("/login");
    }
  };

  return (
    <>
      <Header id="2" />;
      <wrapper>
        <Container>
          <h3 className="text-center p-2">Signup for patient</h3>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="mobile" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control type="text" placeholder="Apartment, studio, or floor" onChange={(e) => setAddress1(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="eg. Pune.." onChange={(e) => setCity(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="eg. Maharashtra" onChange={(e) => setState(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" onChange={(e) => setZip(e.target.value)} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <FloatingLabel controlId="floatingSelect" label="Gender" as={Col}>
                <Form.Select aria-label="Floating label select example" defaultValue="Male" onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Gender Neutral">Gender Neutral</option>
                </Form.Select>
              </FloatingLabel>
              <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
              </Form.Group>
            </Row>

            {/* <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Choose Profile Photo</Form.Label>
              <Form.Control type="file" size="sm"  onChange={handleChange} />
            </Form.Group> */}
          </Form>
          <Button variant="primary" type="submit" className="md-3" onClick={sendMessage}>
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
