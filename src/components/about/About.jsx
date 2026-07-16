import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImg.jpg'
import { FaRegStar,FaRegClock,FaRegCheckSquare } from "react-icons/fa";
import { RiSpeakAiLine } from "react-icons/ri";


const About = () => {
  return (
    <div className='About'>

    <div className="about-content">
    <div className="about-right">
    <span className="about-badge">about us</span>
    <h1 className="about-title">
        <span className="line1">Local tech,</span>
        <span className="line2">& print shop.</span>
        <span className="line3">in Douglas.</span>
    </h1>
    <p className="about-subtitle">Since 2015, we’ve been the trusted digital hub for the Douglas community. 
    Whether you need high-speed internet access to check your emails, reliable printing 
    and scanning services for your school projects, or professional document copying, 
    our friendly team is here to help you get connected and get things done.</p>
    </div>
    
    <div className="about-left">
    <div className="about-image">
    <img src={aboutImg} alt="Pc trio local tech and print shop in Douglas" />
    <span className="about-tag">
    <h2>12<span>+</span></h2>
    <h3>Years in Business</h3>
    </span>
    </div>
    </div>
    </div>

    

    <div className="about-work">
    <span className="about-badge">how we work</span>
   <div className="about-work-cards">
    {/*Quality*/}
    <div className="about-work-cards-item">
    <span className="about-work-cards-icon"><FaRegStar/></span>
    <span className="about-work-cards-label">Quality First</span>
    <span className="about-work-cards-caption">Every repair leaves our bench tested and verified. 
    We don't hand back a device until we're confident it'll hold.</span>
    </div>
    {/*Turnaround*/}
   <div className="about-work-cards-item">
    <span className="about-work-cards-icon"><FaRegClock/></span>
    <span className="about-work-cards-label">Same-Day Turnaround</span>
    <span className="about-work-cards-caption">Most repairs and print jobs are completed the same day you 
    walk in no week-long wait, no unnecessary back-and-forth.</span>
   </div>
   {/*Honest Advice*/}
   <div className="about-work-cards-item">
    <span className="about-work-cards-icon"><RiSpeakAiLine/></span>
    <span className="about-work-cards-label">Honest Advice</span>
    <span className="about-work-cards-caption">We tell you straight whether a repair is worth it. 
    If it's not, we say so and help you figure out what is.</span>
   </div>
    {/*90-Day Warranty*/}
   <div className="about-work-cards-item">
    <span className="about-work-cards-icon"><FaRegCheckSquare/></span>
    <span className="about-work-cards-label">90-Day Warranty</span>
    <span className="about-work-cards-caption">All repairs are covered for 90 days. 
    If the same issue resurfaces, we fix it no charge, no questions.</span>
   </div>
   </div>
    </div>
    
    </div>
  )
}

export default About
