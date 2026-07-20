import React, { useState, useEffect, useRef } from "react";
import './Navbar.css'
import logo from '../../assets/PCTRIO_LOGO.png'
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null);

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (sectionId) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])


  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={sticky ? 'blur-nav' : ''} ref={navRef}>
      

      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <span onClick={() => handleNavClick('hero')}>Home</span>
        </li>
        <li>
          <span onClick={() => handleNavClick('services')}>Services</span>
        </li>
        <li>
          <span onClick={() => handleNavClick('ourwork')}>Our Work</span>
        </li>
        <li>
          <span onClick={() => handleNavClick('contact')}>Contact</span>
        </li>
        <li>
          <RouterLink to="/about" onClick={() => setMenuOpen(false)}>About Us</RouterLink>
        </li>
      </ul>

      <span className='whatsapp'>
        <FaWhatsapp size={18} style={{ marginBottom: '-4px' }} /> Direct Message
      </span>

      <button
        className={menuOpen ? 'burger open' : 'burger'}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar