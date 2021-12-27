import Header from "../../components/Header";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import React from "react";
import { useEffect } from "react";
import * as axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { addBooking } from "../../redux/actions/appointmentActions";
import PatientNav from "../../components/PatientNav";
import { delSession } from "../../redux/actions/sessionActions";

function home() {
  const [data, setData] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query.id;
  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.id);
    console.log(id);
    axios.get(`http://localhost:9000/doctor/${id}`).then((response) => {
      setData(response.data);
      //  console.log(object.appointments);
      //setOppointment(object.appointments)
      // console.log(oppointment);
    });
  }, [router.isReady]);

  console.log(id);

  const session = useSelector((state) => state);
  const user = session.data.login;
  if (!user) {
    Router.push("/");
    return <h4>Redirecting to home page.</h4>;
  }

  const book = (e) => {
    e.preventDefault();
    const appoint = { doctor_id: data._id, patient_id: user._id };
    console.log(appoint);
    dispatch(addBooking(appoint));

    router.push("/appointment");
  };

  const logout = () => {
    console.log("logout");
    dispatch(delSession());
    Router.push("/");
    return <h4>logging you out...</h4>;
  };

  console.log(data);

  return (
    <>
      <Container fluid>
        <Row>
          <PatientNav className="mb-2" logout={logout} />
        </Row>
      </Container>

      <Container className="shadow p-3 mb-5 my-4 bg-body rounded">
        <Row>
          <Col>
            <img src="/doctor.jpg" alt="Dp" />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Header>{data.name}</Card.Header>
                <Card.Title className="my-2">{data.specialisation}</Card.Title>
                <Card.Text>
                  <p>
                    <ul>
                      <li>specialisation</li>
                    </ul>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <p>
              <h4 align="center">Brief Statistics</h4>
              <h5 align="center"> Treated {data.appointments ? data.appointments.length : 0} patients </h5>
            </p>
            <br />
            <p>
              <h4 align="center"> Rating</h4>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col>
            <Button variant="primary" size="lg" onClick={book}>
              <BookOnlineIcon fontSize="large" className="mx-1" />
              Book Appointment
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              <DirectionsIcon fontSize="large" className="mx-1" />
              Directions
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container className="my-4 p-3 shadow  bg-body rounded">
        <p>
          <h4 align="let">Brief Profile</h4>
          {data.intro}
        </p>
      </Container>
    </>
  );
}

export default home;
