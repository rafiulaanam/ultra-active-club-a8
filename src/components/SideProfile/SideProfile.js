import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./SideProfie.css";
import rafi from "../../image/rafi.jpg";
import { useState } from "react";
import Toastco from "../Toast/Toastco";
const SideProfile = (props) => {
 
  const [sec, setSec] = useState(0)



let newtime =0;
for(const stime of props.time){
  newtime = newtime + stime
}

  return (
    <div className="flexProfile">
      <div>
      <div className="pro-center">
      <div className="profile">
        <div className="img">
          <img src={rafi} alt="" />
        </div>
       <div> <h5>Rafiul Anam</h5>
        <span className="sy"><FontAwesomeIcon icon={faLocationDot} />  Sylhet, Bangladesh</span>
        </div>
      </div>
      </div>


{/* info */}
      <div className="info">
        <div>
        <span>75</span>kg
          <p>Weight</p>
        </div>
        <div>
         <span> 6.5</span>
          <p>Height</p>
        </div>
        <div>
          <span>25</span>yrs
          <p>Age</p>
        </div>
      </div>

{/* Add A Break */}
<h5>Add A Break</h5>
<div className="sec">
        <div >
         
         <button onClick={()=>{setSec(10)}} >10s</button>
        </div>
        <div>
        <button onClick={()=>{setSec(20)}}>20s</button>
        </div>
        <div>
        <button onClick={()=>{setSec(30)}}>30s</button>
        </div>
        <div>
        <button onClick={()=>{setSec(40)}}>40s</button>
        </div>
        <div>
        <button onClick={()=>{setSec(50)}}>50s</button>
        </div>
       
      </div>

{/* Exercise Details */}
<h5>Exercise Details</h5>
<div className="details">
        <div>
         <span><b>Exercise Time</b></span>
        </div>
        <div>
          {newtime} seconds
        </div>
        
      </div>
<div className="details">
        <div>
         <span><b>Break Time</b></span>
        </div>
        <div>
         {sec} seconds
        </div>
        
      </div>

<Button className='activity-btn' variant="success" >Activity Completed</Button>









      </div>

    </div>
  );
};

export default SideProfile;
