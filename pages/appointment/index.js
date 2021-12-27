import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { delSession } from "../../redux/actions/sessionActions";
import { getSession } from "../../redux/actions/sessionActions";
import Router from "next/router";
import PatientNav from "../../components/PatientNav";

const index = () => {
  const session = useSelector((state) => state);
  const booking = session.appointments.booking;
  const dispatch = useDispatch();

  const [patient_id, setPatient_id] = useState(booking.patient_id);
  const [doctor_id, setDoctor_id] = useState(booking.doctor_id);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const bookAppointment = async (e) => {
    e.preventDefault();

    const postData = {
      patient_id: patient_id,
      doctor_id: doctor_id,
      time: time,
      date: date,
    };
    console.log(postData);
    savePost(postData);

    setDoctor_id("");
    setPatient_id("");
    setTime("");
    setDate("");
  };

  const savePost = async (postData) => {
    await axios
      .post("http://localhost:9000/appointment", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        res.data = { ...res.data, isPatient: true, isDoctor: false };
        dispatch(getSession(res.data));
      });
    alert("Appointment booked successfully");
    Router.back();
  };

  const logout = () => {
    console.log("logout");
    dispatch(delSession());
    Router.push("/");
    return <h4>logging you out...</h4>;
  };

  return ( 
    <div>
      <Container fluid>
        <Row>
          <PatientNav className="mb-2" logout={logout} />
        </Row>
        <Row className="p-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Id</Form.Label>
              <Form.Control type="text" placeholder="Enter patient id" defaultValue={patient_id} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Doctor Id</Form.Label>
              <Form.Control type="text" placeholder="Enter doctor id" defaultValue={doctor_id} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Time of appointment</Form.Label>
              <Form.Control type="time" placeholder="Enter time" onChange={(e) => setTime(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date of appointment</Form.Label>
              <Form.Control type="date" placeholder="Enter date" onChange={(e) => setDate(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={bookAppointment}>
              Confirm your appointment
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default index;
