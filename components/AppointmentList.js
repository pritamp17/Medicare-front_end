import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import styled from "styled-components";

export const AppointmentList = ({ data }) => {
  const appointments = data.appointments;
  return (
    <Wrapper1>
      <div>
        <h3>Recent Appointments</h3>
      </div>
      <Wrapper>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, i) => (
              <td obj={app} key={i} />
            ))}

            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            
          </tbody>
        </Table>
      </Wrapper>
    </Wrapper1>
  );
};

const Wrapper = styled.div`
  max-height: 200px;
  overflow: auto;
  align-items: center;
  display: flex;
  padding-top: 300px;
`;

const Wrapper1 = styled.div``;
