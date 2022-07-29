import React from "react";

function Student({student, onMissing}) {
    return (
        <div className = {`student ${student.missing ? 'missing': ''}`}>
        <h3>
            {student.name} <button className = 'btn'>Present </button> <button className = 'btn' onClick={()=> onMissing(student.id)}>Missing </button> 
        </h3>
      </div>
    );
}

export default Student;