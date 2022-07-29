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
          <button style={{backgroundColor:"skyBlue", width:"20%"}}>+</button>
        </tr>
        <tr>
          <td>Aayush Gandhi</td>
          <td>4:00 pm</td>
          <td>SHOOTA W A GLOCK</td>
          <button style={{backgroundColor:"skyBlue", width:"20%"}}>+</button>
        </tr>
        <tr>
          <td>Ako Saini</td>
          <td>3:00 am</td>
          <td>Supa hot fyea</td>
          <button style={{backgroundColor:"skyBlue", width:"20%"}}>+</button>
        </tr>
        <tr>
          <td>Manas Jain</td>
          <td>12:00 pm</td>
          <td>Missing Kid</td>
          <button style={{backgroundColor:"skyblue", width:"20%"}}>+</button>
        </tr>
        <tr>
          <td>Navdha Koladia</td>
          <td>1:00 pm</td>
          <td>Missing Kid</td>
          <button style={{backgroundColor:"skyblue", width:"20%"}}>+</button>
        </tr>
        <tr>
          <td>Cassidy Brown</td>
          <td>4:00 pm</td>
          <td>Missing Kid</td>
          <button style={{backgroundColor:"skyblue", width:"20%"}}>+</button>
        </tr>
        <tr>
          <td>Hardik Singh</td>
          <td>5:00 pm</td>
          <td>Missing Kid</td>
          <button style={{backgroundColor:"skyblue", width:"20%"}}>+</button>
        </tr>
      </tbody>
    </Table>
  );
}

export default Forum;