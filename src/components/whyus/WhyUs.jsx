import React from 'react'
import './WhyUs.css'
import { FaRegStar,FaRegClock,FaRegCheckSquare } from "react-icons/fa";
import { RiSpeakAiLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";

const WhyUs = () => {
  return (
    <div className='WhyUs'>
    <div className="whyus-content">
    <span className="whyus-badge">why choose us</span>
    <h1 className="whyus-title">
        <span className="line1">Reasons locals pick,</span>
        <span className="line2">PC TRIO.</span>
    </h1>

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
        <span className="about-work-cards-icon"><BsLightningCharge/></span>
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

export default WhyUs
