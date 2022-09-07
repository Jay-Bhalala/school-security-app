import React from "react";
import './Attendance.css'
import Student from './Student.js'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Attendance() {
  const [show, setShow] = useState(false);
  function handleClose(){
    setShow(false);
  }
  const handleShow = () => setShow(true);
    
  
  const [students, setStudents] = useState([
      {id: 1, name: 'Dhanush Jain', present:false},
      {id: 2,name: 'Jay Bhalala',present:false},
      {id: 3,name: 'Hardik Singh',present:false},
      {id: 4,name: 'Akshat Saini',present:false},
      {id: 5,name: 'Nikhil Jain',present:false},
      {id: 6,name: 'Aayush Gandhi',present:false}
    ])

    //Present student
    function presentStudent(id)
    {
      setStudents(students.map((student)=> student.id === id ? {...student, present: !student.present}: student))
    }

    function missingStudent(id)
    {
      setStudents(students.filter((student)=> student.id !== id))
    }

    return (
      <>
      <div>
        <header className = 'header'>
            <h1>Attendance</h1>
            <p className = 'text'>Your class</p>
            <a href="/missing"><button className = 'btn'>Missing</button> </a>
        </header>   
        <div>
          {students.map((student) => (<Student key={student.id} student={student} onPresent = {presentStudent} onMissing = {missingStudent}/>))}
        </div>
        <div>
        <Button onClick={handleShow}> Add Student </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
        <Form.Label htmlFor="inputPassword5">Full name</Form.Label>
        <Form.Control
          id="input"
        />
      </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal></>
    );
}



export default Attendance;