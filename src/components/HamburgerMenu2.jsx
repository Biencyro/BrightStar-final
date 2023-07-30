import React, {useState} from 'react';
import './HamburgerMenu.css'
import { Link } from 'react-router-dom'



const HamburgerMenu2 = () => {

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
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
              </Link>
          </li>

          </ul>
          
      </div>
      
    </nav>

    </>
  )
}



export default HamburgerMenu2