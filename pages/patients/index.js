import * as React from "react";
import PatientInfo from "../../components/PatientInfo";
import { Container, Row, Col } from "react-bootstrap";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PatientAppointment from "../../components/PatientAppointment";
import PatientVisitSummary from "../../components/PatientVisitSummary";
import PatientNav from "../../components/PatientNav";
const PatientDashboard = (props) => {
  return (
    <Container fluid>
      <Row>
        <PatientNav className="mb-2"/>
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

