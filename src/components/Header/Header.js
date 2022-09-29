import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  return (
    <div >
      <div className="header">
      <h2>
        <FontAwesomeIcon icon={faDumbbell} />   Ultra Active Club
      </h2>

      <h4>Select Today's Exercise</h4>
      </div>
    </div>
  );
};

export default Header;
