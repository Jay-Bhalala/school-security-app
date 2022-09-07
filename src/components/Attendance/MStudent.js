import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MStudent({student, onFound}) {
    const [show, setShow] = useState(false);
    function handleClose(){
      setShow(false);
      onFound(student.id)

    }
    const handleShow = () => setShow(true);
    return (
        <>
        <div className = {`student ${student.present ? 'missing': ''}`}>
        <h3>
            {student.name} <Button onClick={handleShow}> Found </Button> 
        </h3>
      </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Found Student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
        <Form.Label htmlFor="inputPassword5">Input location found</Form.Label>
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

export default MStudent;