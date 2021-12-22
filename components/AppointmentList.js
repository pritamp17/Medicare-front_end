import React from "react";
import { Card, Table } from "react-bootstrap";

export const AppointmentList = () => {
  return (
    <>
      <Card className="m-5">
        <Card.Body>
          <Card.Title className="fw-bold">Appointments</Card.Title>
          <Card.Text>
            <Table className="table-borderless table-hover align-middle overflow-auto">
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
