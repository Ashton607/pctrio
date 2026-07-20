import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/PCTRIO_LOGO.png'
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <nav className={sticky ? 'blur-nav' : ''}>
      <h2>PC<span>TRIO</span></h2>

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