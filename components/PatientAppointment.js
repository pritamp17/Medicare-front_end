import * as React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PatientAppointment = (props) => {
  return (
    <>
      <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Header className="text-primary fw-bold fs-3">
          <span>Latest Appointments</span>
          <a href="#" className="text-decoration-none text-secondary fw-light fs-6 ms-5 text-center">
            Book your appointment
          </a>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div>
              <h6 className="text-primary">Dr. John Duarte</h6>
              <p className="h6 text-muted">
                <span className="fw-bold">Appointment date: </span>
                <span>2020-12-10</span>
              </p>
              <p className="h6 text-muted">
                <span className="fw-bold">Time: </span>
                <span>17:50:00</span>
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            <div>
              <h6 className="text-primary">Dr. John Duarte</h6>
              <p className="h6 text-muted">
                <span className="fw-bold">Appointment date: </span>
                <span>2020-12-10</span>
              </p>
              <p className="h6 text-muted">
                <span className="fw-bold">Time: </span>
                <span>17:50:00</span>
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            <div>
              <h6 className="text-primary">Dr. John Duarte</h6>
              <p className="h6 text-muted">
                <span className="fw-bold">Appointment date: </span>
                <span>2020-12-10</span>
              </p>
              <p className="h6 text-muted">
                <span className="fw-bold">Time: </span>
                <span>17:50:00</span>
              </p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default PatientAppointment;
