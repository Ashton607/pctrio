import React from 'react'
import './Navbar.css'
import logo from '../../assets/PCTRIO_LOGO.png'

const Navbar = () => {
  return (
    <nav>
    <h2>PC<span>TRIO</span>
    </h2>
    <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Our Work</li>
        <li>Contact</li>
    </ul>
    <span className='whatsapp'>Direct Message</span>
    </nav>
  )
}

export default Navbar
