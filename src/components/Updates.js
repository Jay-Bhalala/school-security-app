import Table from 'react-bootstrap/Table';
import React,{ useState} from 'react';
//import { nanoid } from "nanoid";

function Updates() {

  const data = [
    { id:1, time: "7:15", name: "Nikhil Jain", lastSeen: "B5", severity: "SEVERE" },
    { id:2, time: "7:45", name: "Aayush Gandhi", lastSeen: "Cafeteria", severity: "MILD"  },
    { id:3, time: "8:15", name: "Akshat Saini", lastSeen: "Gym", severity: "LOW"  },
    { id:4, time: "8:45", name: 'Jay Bhalala', lastSeen: "B1", severity: "SEVERE"  },
    { id:5, time: "9:15", name: "Hardik Singh", lastSeen: "Fine Arts", severity: "HIGH"  }
  ]
  
  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    time: "",
    name: "",
    lastSeen: "",
    severity: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      time: addFormData.time,
      name: addFormData.name,
      lastSeen: addFormData.lastSeen,
      severity: addFormData.severity,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };


  return (
    <div className="App">
      <h1>Updates</h1>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Last seen</th>
            <th>Severity Level</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => {
              return (
                <tr>
                  <td>{contact.time}</td>
                  <td>{contact.name}</td>
                  <td>{contact.lastSeen}</td>
                  <td>{contact.severity}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      

      <h2>Add an Update</h2>
      <form  >
        <input
          type="time"
          name="time"
          required="required"
          placeholder="Time..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="name"
          required="required"
          placeholder="Name..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="lastSeen"
          required="required"
          placeholder="Last seen..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="severity"
          required="required"
          placeholder="Severity level..."
          onChange={handleAddFormChange}
        />

        <button onClick={handleAddFormSubmit} type="submit">Add Update</button>

      </form>
    </div>
  );
}

export default Updates;