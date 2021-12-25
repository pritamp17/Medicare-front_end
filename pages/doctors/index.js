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
  const [object, setObject] = useState({});
  const session = useSelector((state) => state);
  console.log(session);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!session.data.login) {
      Router.push("/");
      return <h4>logging you out....</h4>;
    }
  }, []);
  setObject(session.data.login);
  const logout = () => {
    console.log("logout");
    dispatch(delSession());
    Router.push("/");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <DoctorNav logout={logout} />
        </Row>
        <Row>
          <Col md={4}>
            <DoctorInfo className="m-5" name={object.name} len = {object.appointments} />
          </Col>
          <Col md={8}>
            <Row>
              <Col><AppointmentList className="m-5"/> </Col>
            
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Doctor;
