import React, {useState} from "react";
import './Map.css'

function Map() {

  const[isActive, setIsActive] = useState(false);

  function myFunction()
    {
      setIsActive(true);
    }

    return (
      <div class="container">
        <div class="container">
          <div class="map-container">
            <img src="https://sites.google.com/site/cruznaligaselementaryschoolqc/school-map/ground.png"></img>
            <div class="point mainhallway tippy" title="Main Hallway"></div>
            <div class="point frontoffice tippy" title="Front Office"></div>
            <div class="point avroom tippy" title="AV Room"></div>
            <div class="point room107 tippy" title="Room 107"></div>
            <div class="point room108 tippy" title="Room 108"></div>
            <div class="point room106 tippy" title="Room 106"></div>
            <div class="point cafeteria tippy" title="Cafeteria"></div>
            <div class="point library tippy" title="Library"></div>
            <div class="point mainentrance tippy" title="Main Entrance"></div>
            <div class="point room103 tippy" title="Room 103"></div>
            <div class="point room105 tippy" title="Room 105"></div>
            <div class="point" title="Room 104"></div>
        </div>  
        </div>     
      </div>
    );
  }
  
  export default Map;