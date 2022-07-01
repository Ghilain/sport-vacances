import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import logo from '../images/logo.png';

function NavBar() {
  const detailsNav = <TiArrowBackOutline className="goBack" />;
  const header = 'Basketball Players';
  const location = useLocation();
  const goBack = location.pathname.includes('player') ? detailsNav : '';

  return (
    <nav>
      <div className="nav1">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
        <h1 className="header1">BASKETBALL-PLAYERS</h1>
        <div className="navIcons">
          <BsMic />
          <AiOutlineSetting />
        </div>
      </div>
      <div className="nav2">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="header2">
          {header}
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
