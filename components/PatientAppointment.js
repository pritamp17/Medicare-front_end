import * as React from "react";
import { useEffect, useState } from "react";
import * as axios from "axios";
import { Card, ListGroup } from "react-bootstrap";

const PatientAppointment = ({ appointments }) => {
  const [data, setData] = useState([]);
  console.log(appointments);


  const empty = () => {
    <ListGroup.Item className="p-4">
      <div>
        <h6 className="text-primary">No appointments made yet.</h6>
      </div>
    </ListGroup.Item>;
  };

  useEffect(() => {
    axios.post("http://localhost:9000/appointment/fetch", appointments).then((response) => {
      console.log(response.data)
      setData(response.data);
    });
  }, []);



  return (
    <>
      <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Header className="text-primary fw-bold fs-3">
          <span>Latest Appointments</span>
          <a href="http://localhost:3000/patients/history" className="text-decoration-none text-secondary fw-light fs-6 ms-5 text-center">
            See your medical history
          </a>
        </Card.Header>

        <ListGroup variant="flush">
          {data.map((item) => (
            <ListGroup.Item className="p-4">
              <div>
                <h6 className="text-primary">Dr. {item.doctor_name.toUpperCase()}</h6>
                <p className="h6 text-muted">
                  <span className="fw-bold">Appointment date: </span>
                  <span>{item.date}</span>
                </p>
                <p className="h6 text-muted">
                  <span className="fw-bold">Time: </span>
                  <span>{item.time}</span>
                </p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </>
  );
};

export default PatientAppointment;
