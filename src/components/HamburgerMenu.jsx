import React, {useState} from 'react';
import './HamburgerMenu.css'
import { Link } from 'react-router-dom'



const HamburgerMenu = () => {

  const [click, setClick] = useState(false);
  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    
    <nav className='navbar'>
      <div className='navbar-container'>
        
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
        <img src="./images/brightstar-new-logo.png" alt="" />
        
          

          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
          </li>

          <li className='nav-item'>
              <Link to='/homepage' className='nav-links' onClick={closeMobileMenu}>
              Course
              </Link>
          </li>

          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              About
              </Link>
          </li>

          <li className='nav-item'>
              <Link to='/contaact' className='nav-links' onClick={closeMobileMenu}>
              Contact
              </Link>
          </li>

          <li>
              <Link
                to='/authentication'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login/ <br />
                Sign Up
              </Link>
            </li>

          </ul>
          
      </div>
      
    </nav>

    </>
  )
}

/*

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
 */

export default HamburgerMenu