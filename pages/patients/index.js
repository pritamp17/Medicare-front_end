import React from "react";
import PatientInfo from "../../components/PatientInfo";
import { Container, Row, Col } from "react-bootstrap";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PatientAppointment from "../../components/PatientAppointment";
import PatientVisitSummary from "../../components/PatientVisitSummary";
import PatientNav from "../../components/PatientNav";
import { useSelector, useDispatch } from "react-redux";
import { delSession } from "../../redux/actions/sessionActions";
import Router from "next/router";

const PatientDashboard = (props) => {
  const session = useSelector((state) => state);

  const dispatch = useDispatch();

  const logout = () => {
    console.log("logout");
    dispatch(delSession());
    Router.push("/");
    return <h4>logging you out...</h4>;
  };

  const data = session.data.login; 

  if (data) {
    if (data.isDoctor === true) {
      Router.push("/doctors");
      return <h4>Redirecting you to doctor's page</h4>;
    }
  } else {
    Router.push("/");
    return <h4>Redirecting to home page.</h4>
  }
  
  return (
    <Container fluid>
      <Row>
        <PatientNav className="mb-2" logout={logout} />
      </Row>
      <Row>
        <Col md={3}>
          <PatientInfo data={data}/>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={4}>
              <PatientVisitSummary number={29} text="Clinic Visits" icon={FactCheckIcon}></PatientVisitSummary>
            </Col>
            <Col md={4}>
              <PatientVisitSummary number={29} text="Clinic Visits" icon={FactCheckIcon}></PatientVisitSummary>
            </Col>
            <Col md={4}>
              <PatientVisitSummary number={29} text="Clinic Visits" icon={FactCheckIcon}></PatientVisitSummary>
            </Col>
          </Row>
          <Row>
            <PatientAppointment ></PatientAppointment>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PatientDashboard;
