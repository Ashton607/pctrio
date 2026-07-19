import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt,FaPhoneAlt,FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const tabs = [
  { key: 'printing', label: 'Printing', color: 'green' },
  { key: 'advertising', label: 'Advertising', color: 'orange' },
  { key: 'it', label: 'IT', color: 'blue' },
  { key: 'general', label: 'General Enquiry', color: 'pink' },
]

const ContactForm = ({ color, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${service} enquiry:`, formData)
    // hook up your email/API logic here
  }

  

  return (
    <form className={`contact-form ${color}`} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="082 123 4567"
        />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={`Tell us about your ${service} needs...`}
          rows={5}
          required
        />
      </div>

      <button type="submit" className={`form-submit ${color}`}>
        Send Enquiry
      </button>
    </form>
  )
}

const infoItems = [
  {
    icon: (
      <FaMapMarkerAlt/>
    ),
    label: 'Address',
    line1: '15 Barkly Street, Douglas',
    line2: 'Ground floor, next to the pharmacy',
  },
  {
    icon: (
      <FaPhoneAlt/>
    ),
    label: 'Phone',
    line1: '082 657 4330',
    line2: 'Mon – Sat, 8am – 6pm',
  },
  {
    icon: (
      <IoIosMail/>
    ),
    label: 'Email',
    line1: 'pctriodouglas@gmail.com',
    line2: 'We reply within a few hours',
  },
  {
    icon: (
      <FaClock/>
    ),
    label: 'Hours',
    line1: 'Mon – Fri: 8am – 6pm',
    line2: 'Saturday: 9am – 4pm · Closed Sunday',
  },
]

const Contact = () => {
  const [activeTab, setActiveTab] = useState('printing')
  const currentTab = tabs.find((t) => t.key === activeTab)

  return (
    <div className='Contact' id='contact'>
      <div className="contact-content">
        <span className="contact-badge">get in touch</span>
        <h1 className="contact-title">
          <span className="line1">Get in Touch or</span>
          <span className="line2">Visit Us in Person.</span>
        </h1>
        <p className="contact-subtitle">
          Whether you want to check our latest copy rates, confirm PC availability, or email your
          documents over ahead of time for quick printing, we are here to help. Reach out to our
          friendly Douglas team via phone, WhatsApp, or email.
        </p>

        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-tabs-header">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`contact-tab-btn ${tab.color} ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="contact-tabs-content">
              <ContactForm color={currentTab.color} service={currentTab.label} />
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-info">
              {infoItems.map((item, i) => (
                <div className="info-card" key={i}>
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-details">
                    <span className="info-label">{item.label}</span>
                    <span className="info-line1">{item.line1}</span>
                    <span className="info-line2">{item.line2}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-map">
              <iframe
              title="PC Trio Location"
              src="https://www.google.com/maps?q=15+Barkly+Street,+Douglas,+8730,+South+Africa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact