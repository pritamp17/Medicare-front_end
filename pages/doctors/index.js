import React, { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { AppointmentList } from "../../components/AppointmentList";
import DoctorInfo from "../../components/DoctorInfo";
import DoctorNav from "../../components/DoctorNav";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { delSession } from "../../redux/actions/sessionActions";
import { useState } from "react";

function Doctor() {
  //const [object, setObject] = useState();
  const session = useSelector((state) => state);
  const dispatch = useDispatch();

  const logout = () => {
    console.log("logout");
    dispatch(delSession());
    Router.push("/");
    return <h4>logging you out...</h4>
  };

  const data = session.data.login;

  if (data) {
    if (data.isPatient === true) {
      Router.push("/patients");
      return <h4>Redirecting you to patient's page</h4>;
    }
  } else {
    Router.push("/");
    return <h4>Redirecting to home page.</h4>;
  }

  return (
    <>
      <Container fluid>
        <Row>
          <DoctorNav logout={logout} data={data} />
        </Row>
        <Row>
          <Col md={4}>
            <DoctorInfo className="m-5" data={data} />
          </Col>
          <Col md={8}>
            <Row>
              <Col>
                <AppointmentList className="m-5" appointments={data.appointments} />{" "}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Doctor;
