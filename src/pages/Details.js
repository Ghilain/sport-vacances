import React from 'react';
import logo from '../images/logo.png';

function Country() {
  return (
    <div className="dataContainer">
      <div className="continent">
        <img src={logo} alt="flag" className="flag" />
      </div>
      <div>
        <ul className="today">
          <h3>Player&apos;s details:</h3>
          <li>
            <h4>Firstname:</h4>
            Ron
          </li>
          <li>
            <h4>Lastname:</h4>
            Baker
          </li>
          <li>
            <h4>Position:</h4>
            C
          </li>
        </ul>
        <ul className="total">
          <h3>Team info:</h3>
          <li>
            <h4>City:</h4>
            New York
          </li>
          <li>
            <h4>Conference:</h4>
            East
          </li>
          <li>
            <h4>Division:</h4>
            Atlantic
          </li>
          <li>
            <h4>Name:</h4>
            Knicks
          </li>
          <li>
            <h4>Fullname:</h4>
            New York Knicks
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
