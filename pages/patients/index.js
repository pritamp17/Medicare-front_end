import * as React from "react";
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
  console.log(session);
  const dispatch = useDispatch();
  const logout =  () => {
    console.log("logout");
    dispatch(delSession());
    Router.push("/");
  };
  
  if (!session.data.login) {
    Router.push("/");
    return null;
  }

  return (
    <Container fluid>
      <Row>
        <PatientNav className="mb-2" logout={logout} />
      </Row>
      <Row>
        <Col md={3}>
          <PatientInfo />
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
            <PatientAppointment></PatientAppointment>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PatientDashboard;
