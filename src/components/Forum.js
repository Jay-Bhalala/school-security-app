import React from "react";

import Table from 'react-bootstrap/Table';

function Forum() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time Posted</th>
          <th>Subject</th>
          <th>View Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nikhil Jain</td>
          <td>12:00 am</td>
          <td>Life or Death</td>
          <button>+</button>
        </tr>
        <tr>
          <td>Aayush Gandhi</td>
          <td>4:00 pm</td>
          <td>SHOOTA W A GLOCK</td>
          <button>+</button>
        </tr>
        <tr>
          <td>Ako Saini</td>
          <td>3:00 am</td>
          <td>Supa hot fyea</td>
          <button>+</button>
        </tr>
      </tbody>
    </Table>
  );
}

export default Forum;