import { useEffect,useState } from "react";
import PatientInfo from "../../components/PatientInfo";
import { Container, Row, Col } from "react-bootstrap";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PatientAppointment from "../../components/PatientAppointment";
import PatientVisitSummary from "../../components/PatientVisitSummary";
import PatientNav from "../../components/PatientNav";
import * as axios from 'axios';

const PatientDashboard = (props) => {
  const [object, setObject] = useState({});
  const email = 'pritampawar625@gmail.com'

  useEffect(() => {
  
    axios.get('http://localhost:9000/patient/pritampawar625@gmail.com')
    .then(response => {
       setObject(response.data);
      //  console.log(object);
    })
  }, []) 
 
  return (
    <Container fluid>
      <Row>
        <PatientNav className="mb-2" object = {object}/>
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

