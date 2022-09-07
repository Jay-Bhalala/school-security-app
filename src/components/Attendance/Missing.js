import React from "react";
import './Attendance.css'
import MStudent from './MStudent.js'
import { useState } from 'react'

function Missing() {
    
    const [missingStudents, setStudents] = useState([
        {id: 5,name: 'Nikhil Jain',present:false},
        {id: 6,name: 'Aayush Gandhi',present:false}
    ])

    //Found student
    function foundStudent(id)
    {
        setStudents(missingStudents.filter((student)=> student.id !== id))
    }

    return (
      <div>
        <header className = 'header'>
            <h1>Missing Students</h1>
            <p className = 'text'>Missing</p>
            <a href="/attendance"><button className = 'btn'>Your class</button> </a>
        </header>
        <div>
          {missingStudents.map((student) => (<MStudent key={student.id} student={student} onFound = {foundStudent}/>))}
        </div> 
      </div>
      
      
    );
}

export default Missing;