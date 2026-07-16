import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
import heroImg from '../../assets/heroImg.jpg'
import { FaWhatsapp,FaPhoneAlt } from "react-icons/fa";


const Hero = () => {
const navigate = useNavigate() 
  return (
    <div className='Hero' id="hero">
    <div className="hero-content">
    <span className="hero-badge">Douglas Trusted Tech & Print Shop</span>
    <h1 className="hero-title">
          <span className="line1">We Fix it.</span>
          <span className="line2">We Print it.</span>
          <span className="line3">Done right.</span>
    </h1>
    <p className="hero-subtitle">Douglas expert PC repair, laptop diagnostics, and custom printing 
    all under one roof. Most repairs completed the same day.</p>

    <div className="hero-buttons">
    <button className="hero-button primary" onClick={() => navigate('/')}><FaWhatsapp size={18} style={{marginBottom:'-4px'}}/> Message Directly</button>
    <button className="hero-button secondary" onClick={() => navigate('/')}><FaPhoneAlt size={16} style={{marginBottom:'-3px', marginRight:'5px'}}/> 062 358 4999</button>
    </div>

    <div className="hero-impact">
    <div className="impact-stat">
    <span className="impact-number">500+</span>
    <span className="impact-label">Devices Repaired</span>
    </div>
    <div className="impact-stat">
    <span className="impact-number">24h</span>
    <span className="impact-label">Avg Turnaround</span>
    </div>
    <div className="impact-stat">
    <span className="impact-number">100%</span>
    <span className="impact-label">Quality Promise</span>
    </div>
    </div>

    </div>

    <div className="hero-image">
    <img src={heroImg} alt="Pc trio technology in Douglas" />
   <span className="hero-tag">
   <h2>Services Available</h2>
   <div className="hero-tag-columns">
    <ul>
      <li>Laptop Screen Repair</li>
      <li>Camera Installations</li>
      <li>Ads for businesses</li>
    </ul>
    <ul>
      <li>Internet Cafe</li>
      <li>Microsoft Office Installation</li>
      <li>Virus & Malware Removal</li>
    </ul>
  </div>
  </span>
  </div>
    
      
    </div>
  )
}

export default Hero
