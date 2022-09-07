import Table from 'react-bootstrap/Table';
import React,{ useState} from 'react';


function Forum() {

  const data = [
    { id:1, time: "7:15", name: "Nikhil Jain" , message: "missing kids"},
    { id:2, time: "7:45", name: "Aayush Gandhi", message: "APUSH all clear"},
    { id:3, time: "8:15", name: "Akshat Saini", message:"seen in B1"},
    { id:4, time: "8:45", name: 'Jay Bhalala',message:"kid left school"},
    { id:5, time: "9:15", name: "Hardik Singh",message:"seen entering b1"}
  ]
  
  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState({
    time: "",
    name: "",
    message: "",
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
      message: addFormData.message,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };


  return (
    <div className="App">
      <h1>Forum</h1>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => {
              return (
                <tr>
                  <td>{contact.time}</td>
                  <td>{contact.name}</td>
                  <td>{contact.message}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      

      <h2>Add a Post</h2>
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
          name="message"
          required="required"
          placeholder="Message"
          onChange={handleAddFormChange}
        />

        <button onClick={handleAddFormSubmit} type="submit">Add Discussion</button>

      </form>
    </div>
  );
}

export default Forum;