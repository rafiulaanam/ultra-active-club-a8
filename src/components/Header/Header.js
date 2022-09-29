import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2><FontAwesomeIcon icon={faDumbbell} />
Ultra Active Club</h2>

<h3>Select Today's Exercise</h3>
        </div>
    );
};

export default Header;