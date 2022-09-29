import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "./SideProfie.css";
import rafi from "../../image/rafi.jpg";
const SideProfile = () => {
   
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
        <div>
         10s
        </div>
        <div>
          20s
        </div>
        <div>
          30s
        </div>
        <div>
          40s
        </div>
        <div>
          50s
        </div>
       
      </div>

{/* Exercise Details */}
<h5>Exercise Details</h5>
<div className="details">
        <div>
         <span>Exercise Time</span>
        </div>
        <div>
          200s
        </div>
        
      </div>
<div className="details">
        <div>
         <span>Break Time</span>
        </div>
        <div>
          20s
        </div>
        
      </div>

<Button className='activity-btn' variant="success">Activity Completed</Button>









      </div>

    </div>
  );
};

export default SideProfile;
