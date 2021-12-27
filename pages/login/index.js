import React, { useState, useEffect } from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container, Alert } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../components/Header";
import * as axios from "axios";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getSession } from "../../redux/actions/sessionActions";
import { Doctor } from "../doctors/index";
import { PatientDashboard } from "../patients/index";

function login() {
  const [docEmail, setDocEmail] = useState("");
  const [docPass, setDocPass] = useState("");
  const [patEmail, setPatEmail] = useState("");
  const [patPass, setPatPass] = useState("");
  const dispatch = useDispatch();

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
  
  

  // //////////////// doc
  const DocFun = async (e) => {
    e.preventDefault();

    const postData = {
      email: docEmail,
      password: docPass,
    };
    console.log(postData);
    saveDocPost(postData);
    setDocEmail("");
    setDocPass("");
  };

  const saveDocPost = async (postData) => {
    await axios
      .post("http://localhost:9000/login/doctor", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
        res.data = { ...res.data, isPatient: false, isDoctor: true };
        dispatch(getSession(res.data));
        componentDidMount();
      });
  };

  const componentDidMount = () => {
    const { pathname } = Router;
    if (pathname == "/login") {
      Router.push("/doctors");
    }
  };

  // ///////////////////////////////////////////// pat

  const PatFun = async (e) => {
    e.preventDefault();

    const postData = {
      email: patEmail,
      password: patPass,
    };
    console.log(postData);
    savePatPost(postData);
    setPatEmail("");
    setPatPass("");
  };

  const savePatPost = async (postData) => {
    await axios
      .post("http://localhost:9000/login/patient", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
        res.data = { ...res.data, isPatient: true, isDoctor: false };
        dispatch(getSession(res.data));
        componentDidMountP();
      }).catch((err) => {
        console.log(err);
      });
  };

  const componentDidMountP = () => {
    const { pathname } = Router;
    if (pathname == "/login") {
      Router.push("/patients");
    }
  };

  return (
    <>
      <Header id="2" />
      <Container>
        <Row className="row">
          <Col md={6} className="p-5">
            <Card className="p-5">
              <Card.Img variant="top" src="/doctor.jpg" style={{ width: "18rem", height: "18rem" }} className="mx-auto img-fluid rounded-circle text-center" />
              <Card.Body>
                <Card.Title className="text-center">Doctor Login</Card.Title>
                <hr />
                <Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setDocEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={(e) => setDocPass(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={DocFun}>
                      Login
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="p-5">
            <Card className="p-5">
              <Card.Img variant="top" src="/patient.jpg" style={{ width: "18rem", height: "18rem" }} className="mx-auto img-fluid rounded-circle text-center" />
              <Card.Body>
                <Card.Title className="text-center">Patient Login</Card.Title>
                <hr />
                <Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setPatEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={(e) => setPatPass(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={PatFun}>
                      Login
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default login;

const wrapper = styled.section;
