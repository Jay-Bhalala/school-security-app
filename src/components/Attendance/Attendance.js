import React from "react";
import './Attendance.css'
import Student from './Student.js'
import { useState } from 'react'

function Attendance() {
    
    const [students, setStudents] = useState([
      {id: 1, name: 'Dhanush Jain', missing:false},
      {id: 2,name: 'Jay Bhalala',missing:false},
      {id: 3,name: 'Hardik Singh',missing:false},
      {id: 4,name: 'Akshat Saini',missing:false}
    ])

    //Missing student
    function missingStudent(id)
    {
      setStudents(students.map((student)=> student.id === id ? {...student, missing: !student.missing}: student))
    }

    return (
      <div>
        <header className = 'header'>
            <h1>Attendance</h1>
            <p className = 'text'>Your class</p>
            <a href="/missing"><button className = 'btn'>Missing</button> </a>
        </header>   
        <div>
          {students.map((student) => (<Student key={student.id} student={student} onMissing = {missingStudent}/>))}
        </div>
      </div>
    );
}



export default Attendance;