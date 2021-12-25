import * as axios from "axios";
import { useState } from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../components/Header";

function signUp() {
  const [patient_id, setPatient_id] = useState("");
  const [doctor_id, setDoctor_id] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [disease, setDisease] = useState("");
  const [prescription, setPrescription] = useState("");
  

  const sendMessage = async (e) => {
    e.preventDefault();
 
    const postData = {
      patient_id: "dfoijeoi",
      doctor_id: "ndsjknjkds",
      time: time,
      date: date,
      status: "",
      symptoms: symptoms,
      disease: disease,
      prescription: prescription,
      test_id: "efjuehuufe"
    };
    console.log(postData);
    savePost(postData);

    setDoctor_id("");
    setPatient_id("");
    setTime("");
    setDate("");
    setSymptoms();
    setDisease("");
    setPrescription("");
  };

  const savePost = async (postData) => {
    await axios
      .post("http://localhost:9000/signup/appointment", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };


  return (
    <>
      <Header id="2" />;
      <wrapper>
        <Container>
          <Form>
            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} controlId="formGridName">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Time" onChange={(e) => setTime(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridMobile">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>symptoms</Form.Label>
              <Form.Control placeholder="mild Fever.." onChange={(e) => setSymptoms(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>disease</Form.Label>
              <Form.Control type="text" onChange={(e) => setDisease(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>prescription</Form.Label>
                <Form.Control type="text" onChange={(e) => setPrescription(e.target.value)} />
              </Form.Group>
            </Row>
          </Form>
          <Button variant="primary" type="submit" className="md-3" onClick={sendMessage}>
            Submit
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
