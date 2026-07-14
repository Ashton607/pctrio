import React from 'react'
import './Navbar.css'
import logo from '../../assets/PCTRIO_LOGO.png'
import { FaWhatsapp } from "react-icons/fa";

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
    <span className='whatsapp'><FaWhatsapp size={18} style={{marginBottom:'-4px'}}/> Direct Message</span>
    </nav>
  )
}

export default Navbar
