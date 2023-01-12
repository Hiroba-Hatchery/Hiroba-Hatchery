import React, { useState, useEffect } from 'react';
//import the link for the logo
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Hiroba Hatchery
            <img
              src='https://github.com/Hiroba-Hatchery/Hiroba-Hatchery/raw/dev/media/pink.png'
              width='35px'
              height='35px'
              padding='10px'
            ></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'font types' : 'other font types'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign-up/Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default navbar;
