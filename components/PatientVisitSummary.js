import * as React from "react";
import { Card, } from "react-bootstrap";

const PatientVisitSummary = (props) => {
  return (
    <>
      <Card style={{ width: "14rem" }} className="shadow p-3 mb-5 bg-body rounded">
        <Card.Body>
          <Card.Title>
            {props.number} <props.icon color="primary" fontSize="large" className="ms-5" />
          </Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PatientVisitSummary;