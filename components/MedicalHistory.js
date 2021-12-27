import React from "react";
import { Table, Container } from "react-bootstrap";
import PatientNav from "./PatientNav";
import { useState, useEffect } from "react";
import axios from "axios";

const MedicalHistory = ({ appointments }) => {
  const [data, setData] = useState([]);
  console.log(appointments);

  useEffect(() => {
    axios.post("http://localhost:9000/appointment/fetch", appointments).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <Container fluid>
      <PatientNav />
      <Table className="table mt-5">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
            <th scope="col">Symptoms</th>
            <th scope="col">Disease</th>
            <th scope="col">Prescription</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <td>{i+1}</td>
              <td>{item.doctor_name}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.status}</td>
              <td>{item.symptoms}</td>
              <td>{item.disease}</td>
              <td>{item.prescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MedicalHistory;
