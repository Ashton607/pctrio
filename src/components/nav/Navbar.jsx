import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/PCTRIO_LOGO.png'
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (sectionId) => {
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

  return (
    <nav className={sticky ? 'blur-nav' : ''}>
      <h2>PC<span>TRIO</span></h2>
      <ul>
        <li>
          <span onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
            Home
          </span>
        </li>
        <li>
          <span onClick={() => handleNavClick('services')} style={{ cursor: 'pointer' }}>
            Services
          </span>
        </li>
        <li>
          <span onClick={() => handleNavClick('ourwork')} style={{ cursor: 'pointer' }}>
            Our Work
          </span>
        </li>
        <li>
          <span onClick={() => handleNavClick('contact')} style={{ cursor: 'pointer' }}>
            Contact
          </span>
        </li>
        <li><RouterLink to="/about">About Us</RouterLink></li>
      </ul>
      <span className='whatsapp'>
        <FaWhatsapp size={18} style={{ marginBottom: '-4px' }} /> Direct Message
      </span>
    </nav>
  )
}

export default Navbar