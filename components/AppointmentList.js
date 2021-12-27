import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";

export const AppointmentList = ({ appointments }) => {
  console.log(appointments);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:9000/appointment/fetch/", appointments).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <Wrapper1>
      <div>
        <h3 className="pt-5">Recent Appointments</h3>
      </div>
      <Wrapper>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((app) => (
              <tr>
                <td>{app.patient_name}</td>
                <td>{app.date}</td>
                <a onClick={() => Router.push(`http://localhost:3000/appointment/${app._id}`)}>
                  <td>Click here to go to appointment</td>
                </a>
              </tr>
            ))}
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
`;

const Wrapper1 = styled.div``;
