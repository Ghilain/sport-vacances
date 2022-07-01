import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearchLocation } from 'react-icons/fa';
import logo from '../images/logo.png';

function HomePage() {
  return (
    <div className="homePage">
      <h1 className="continent">Players</h1>
      <form className="form">
        <div>
          <FaSearchLocation />
        </div>
        <div>
          <input className="input-search" type="text" value="" placeholder="Search for player..." />
        </div>
      </form>
      <ul className="dataUL">
        <Link to={{ pathname: '/player/name' }}>
          <li className="countryDetails">
            <div className="details">
              <h1 className="countryName">
                Player info
              </h1>
              <div>
                <h2 className="population">
                  Ron
                </h2>
              </div>
              <div>
                <h2 className="population">
                  Baker
                </h2>
              </div>
              <div>
                <h2 className="population">
                  Position: C
                </h2>
              </div>
            </div>
            <div>
              <img src={logo} alt="flag" className="flag" />
            </div>
          </li>
        </Link>
        <Link to={{ pathname: '/player/name' }}>
          <li className="countryDetails">
            <div className="details">
              <h1 className="countryName">
                Player info
              </h1>
              <div>
                <h2 className="population">
                  Ron
                </h2>
              </div>
              <div>
                <h2 className="population">
                  Baker
                </h2>
              </div>
              <div>
                <h2 className="population">
                  Position: C
                </h2>
              </div>
            </div>
            <div>
              <img src={logo} alt="flag" className="flag" />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default HomePage;
