import React, { useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const navRef = useRef();

   const toggleMenu = () => {
    navRef.current.classList.toggle("responsive_menu")
   }

  return (
    <div className='navBar'>
      <h1 className='logo'>Travel.</h1>

      <ul className="nav_menu" ref={navRef}>
       <Link style={{textDecoration:"none"}} to="/"> <li><i class="fa-solid fa-house"></i>Home</li></Link>
        <Link style={{textDecoration:"none"}} to="/about"><li><i class="fa-solid fa-address-card"></i>About</li></Link>
        <Link style={{textDecoration:"none"}} to="/services"><li><i class="fa-brands fa-servicestack"></i>Services</li></Link>
        <Link style={{textDecoration:"none"}} to="/contact"><li ><i class="fa-solid fa-address-book"></i>Contact</li></Link>
        <Link style={{textDecoration:"none"}} to="signup"><li className='sign'>Signup</li></Link>
        <i className='fa-solid fa-close nav_icon nav_close_icon' onClick={toggleMenu}></i>
      </ul>
      <i className='fa-solid fa-bars nav_icon' onClick={toggleMenu}></i>
    </div>
  )
}

export default Navbar
