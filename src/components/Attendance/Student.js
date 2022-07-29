import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Student({student, onMissing}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div className = {`student ${student.missing ? 'missing': ''}`}>
        <h3>
            {student.name} <button className = 'btn' onClick={()=> onMissing(student.id)}>Present </button> <Button onClick={handleShow}> Missing </Button> 
        </h3>
      </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Possible Locations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
        <Form.Label htmlFor="inputPassword5">Please Input All Possible Location(s) Of The Student</Form.Label>
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

export default Student;