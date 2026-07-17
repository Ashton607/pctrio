import React from 'react'
import './Testimonial.css'

const testimonials = [
  {
    quote: "My laptop died the morning of a big client presentation. Brought it in at 8am, had it back by noon with a new SSD and everything migrated. Genuinely saved my business that day. These guys are the real deal.",
    initials: "MT",
    name: "Marcus T.",
    role: "Small Business Owner",
    tag: "IT Services",
    color: "blue",
  },
  {
    quote: "Needed 200 A3 event posters designed and printed in 48 hours. Not only did they pull it off, the design actually looked better than what I had in mind. Will not go anywhere else for print work.",
    initials: "PS",
    name: "Priya S.",
    role: "Event Coordinator",
    tag: "Advertising Services",
    color: "green",
  },
  {
    quote: "The photo prints are exceptional — colour accuracy is spot on and the finish is clean. I've tried three other shops in the area and none of them come close. This is my go-to now.",
    initials: "DO",
    name: "Derek O.",
    role: "Freelance Photographer",
    tag: "Print Services",
    color: "orange",
  },
]

const Testimonial = () => {
  return (
    <div className='Testimonial'>

    <div className="testimonial-content">
    <span className="testimonial-badge">our work</span>
    <h1 className="testimonial-title">
        <span className="line1">Loved by,</span>
        <span className="line2">Douglas locals.</span>
    </h1>
    <p className="testimonial-subtitle">Stories from customers across the Northern Cape.</p>

    <div className="testimonial-review-badge">
    <span className="review-score">4.9</span>
    <div className="review-divider"></div>
    <div className="review-details">
    <span className="review-title">Google Reviews</span>
    <div className="review-stars">
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="review-count">Based on 10+ ratings</span>
    </div>
    </div>
    </div>

    <div className="testimonial-reviews">
    {testimonials.map((t, i) => (
    <div className="testimonial-card" key={i}>
    <span className="quote-mark">"</span>
    <p className="testimonial-quote">{t.quote}</p>
    <div className="testimonial-footer">
    <div className={`testimonial-avatar ${t.color}`}>{t.initials}</div>
    <div className="testimonial-person">
        <span className="testimonial-name">{t.name}</span>
        <span className="testimonial-role">{t.role}</span>
    </div>
    <span className={`testimonial-tag ${t.color}`}>{t.tag}</span>
    </div>
    </div>
    ))}
    </div>

    </div>
      
    </div>
  )
}

export default Testimonial
