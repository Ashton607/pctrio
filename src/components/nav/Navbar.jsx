import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/PCTRIO_LOGO.png'
import { FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
const [sticky, setSticky] = useState(false)

const navigate = useNavigate()
  const location = useLocation()

  const handleServicesClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
      // wait for navigation, then scroll
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={sticky ? 'blur-nav' : ''}>
    <h2>PC<span>TRIO</span>
    </h2>
    <ul>
        <li>
          {location.pathname === '/' ? (
          <ScrollLink to="Hero" smooth={true} duration={500}>
            Home
          </ScrollLink>
        ) : (
          <span onClick={handleServicesClick} style={{ cursor: 'pointer' }}>
            Home
          </span>
        )}
        </li>
        <li>
          {location.pathname === '/' ? (
          <ScrollLink to="Services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        ) : (
          <span onClick={handleServicesClick} style={{ cursor: 'pointer' }}>
            Services
          </span>
        )}
        </li>
        <li>Our Work</li>
        <li>Contact</li>
        <li><RouterLink to="/about">about us</RouterLink></li>
    </ul>
    <span className='whatsapp'><FaWhatsapp size={18} style={{marginBottom:'-4px'}}/> Direct Message</span>
    </nav>
  )
}

export default Navbar
