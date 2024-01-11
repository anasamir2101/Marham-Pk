import React, { useState } from 'react';
import logo from '../assets/marham-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-links' : ''}`}>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <button className='nav-toggle' onClick={handleToggleLinks}>
        <FaBars />
      </button>

      <ul className={`links ${showLinks ? 'show' : ''}`}>
        <div className='small-screen-logo'>
          <img src={logo} alt='' />
        </div>
        {showLinks && (
          <button className='close' onClick={() => setShowLinks(false)}>
            <FaTimes />
          </button>
        )}
        <li>
          <Link to='/' onClick={() => setShowLinks(false)}>
            Doctors
          </Link>
        </li>
        <li>
          <Link to='/' onClick={() => setShowLinks(false)}>
            Hospitals
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
