import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import { navbar } from '../../data/data-navbar';
import logo from '../../logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} className="logo" alt="loles" />
          </NavLink>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <LunchDiningRoundedIcon fontSize="18px" />
            ) : (
              <LunchDiningOutlinedIcon fontSize="25px" />
            )}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {navbar.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link
                  className="nav-links"
                  activeclassName="active"
                  to={item.label}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {item.path}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
