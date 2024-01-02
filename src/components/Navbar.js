import React, { useState } from 'react';
import logo from '../assets/marham-logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

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
        <li>
          <Link
            to='doctors'
            smooth={true}
            duration={500}
            onClick={handleToggleLinks}
          >
            Doctors
          </Link>
        </li>
        <li>
          <Link
            to='hospitals'
            smooth={true}
            duration={500}
            onClick={handleToggleLinks}
          >
            Hospitals
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
