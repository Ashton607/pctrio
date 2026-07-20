import React from 'react'
import './Footer.css'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logo from '../../assets/PCTRIO_LOGO.png'

const trustPoints = [
  'Douglas-based, the team you can trust',
  '90-day workmanship guarantee on repairs',
  'Careful handling of your files and devices',
]

const exploreLinks = [
  { label: 'Home', },
  { label: 'Services', },
  { label: 'Our Work', },
  { label: 'Testimonials',},
  { label: 'Why Choose Us', },
  { label: 'Contact',},
]

const serviceLinks = [
  { label: 'Printing services', to: '/#services' },
  { label: 'IT Services', to: '/#services' },
  { label: 'Advertising Services', to: '/#services' },
]

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-trust-bar">
        <div className="trust-message">
          <span className="trust-label">Why Locals Trust Us</span>
          <p>Honest pricing, a local address you can visit, and clear aftercare on the work we do.</p>
        </div>
        <div className="trust-points">
          {trustPoints.map((point, i) => (
            <div className="trust-point" key={i}>{point}</div>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="PC Trio logo" />
           
          </div>
          <div className="footer-socials">
            <a href="https://wa.me/27823584999" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            {exploreLinks.map((link, i) => (
              <li key={i}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((link, i) => (
              <li key={i}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get In Touch</h4>
          <ul className="footer-contact-list">
            <li><FiPhone /> 062 358 4999</li>
            <li><FaWhatsapp /> +27 62 358 4999 (WhatsApp)</li>
            <li><FiMail /> pctriodouglas@gmail.com</li>
            <li><FiMapPin /> 15 Barkly Street, Douglas, 8730</li>
            <li><FiClock /> Mon–Sat 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-row">
          <span>© 2026 PC Trio (Pty) Ltd. All rights reserved.</span>
          <span className="footer-bottom-right">
            Proudly serving Douglas, South Africa · <span className="highlight">We Fix It. We Print It.</span>
          </span>
        </div>
        <div className="footer-bottom-center">
          <span>PC Trio Douglas (Pty) Ltd | Douglas, South Africa | Prices confirmed after diagnosis where applicable.</span>
        </div>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-bottom-note">
          <span>Not happy with the print quality? We'll reprint it free. That's our promise.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer