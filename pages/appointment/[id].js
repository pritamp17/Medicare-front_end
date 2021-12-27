import * as axios from "axios";
import { useState, useEffect } from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../components/Header";
import Router from "next/router";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function signUp() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [disease, setDisease] = useState("");
  const [prescription, setPrescription] = useState("");
  const [data, setData] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.id;
  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.id);
    console.log(id);
    axios.get(`http://localhost:9000/appointment/${id}`).then((response) => {

      setData(response.data);
      setTime(response.data.time);
      setDate(response.data.date);
      setSymptoms(response.data.symptoms);
      setDisease(response.data.disease);
      setPrescription(response.data.prescription);
      //setOppointment(object.appointments)
      // console.log(oppointment);
    });
  }, [router.isReady]);

  const sendMessage = async (e) => {
    e.preventDefault();

    const postData = {
      time: time,
      date: date,
      status: "completed",
      symptoms: symptoms,
      disease: disease,
      prescription: prescription,
      test_id: "efjuehuufe",
    };
    console.log(postData);
    savePost(postData);

    setTime("");
    setDate("");
    setSymptoms();
    setDisease("");
    setPrescription("");
  };

 

  const savePost = async (postData) => {
    console.log(data);
    await axios
      .post(`http://localhost:9000/appointment/save/${id}`, postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      Router.push("/doctors");
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
                <Form.Control type="time" placeholder="Time" defaultValue={data.time} onChange={(e) => setTime(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridMobile">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" defaultValue={data.date} onChange={(e) => setDate(e.target.value)} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>symptoms</Form.Label>
              <Form.Control placeholder="mild Fever.." defaultValue={data.symptoms} onChange={(e) => setSymptoms(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>disease</Form.Label>
              <Form.Control type="text" defaultValue={data.disease} onChange={(e) => setDisease(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>prescription</Form.Label>
                <Form.Control type="text" defaultValue={data.prescription} onChange={(e) => setPrescription(e.target.value)} />
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
