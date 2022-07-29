import React from "react";

function Missing() {

    function hello(){
        console.log("Hello")
    }
    return (
        <div>
        <h2>
            Missing
        </h2>
        <button onClick={hello}>Click</button>
      </div>
    );
}

export default Missing;