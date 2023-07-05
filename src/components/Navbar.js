import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';



function Navbar ()  {
    const [click,setClick ] = useState (false);
    const [button,setButton] = useState (true)

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick (false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton (false)
        }else (
            setButton(true)
        )
    };
    useEffect (() =>{
        showButton()
    }, []);

    window.addEventListener('resize',showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to= '/' className='navbar-logo' onClick = {closeMobileMenu}>
                <img src="/images/brightstar-new-logo.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
            </Link>
            <div className='menu-icon'  onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li> 
                <li className='nav-item'>
                <Link to='/course' className='nav-links' onClick={closeMobileMenu}>Course</Link>
                </li> <li className='nav-item'>
                <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>Blog</Link>
                </li> <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                </li> <li className='nav-item'>
                <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu}>SignUp/Login</Link>
                </li> 
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar;