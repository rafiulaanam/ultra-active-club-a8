import React from "react";
import "./SideProfie.css";
import rafi from "../../image/rafi.jpg";
const SideProfile = () => {
  return (
    <div className="flexProfile">
      <div>
      <div className="profile">
        <div className="img">
          <img src={rafi} alt="" />
        </div>
        <h5>Rafiul Anam</h5>
      </div>


{/* info */}
      <div className="info">
        <div>
          75kg
          <p>Weight</p>
        </div>
        <div>
          6.5
          <p>Height</p>
        </div>
        <div>
          25yrs
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
        <div>
          60s
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



<button>Activity Completed</button>







      </div>

    </div>
  );
};

export default SideProfile;
