import React from 'react'

import './styles.scss'

function ContactSection() {
  return (
    <div className="contact-section">
      <div className='container'>
        <h1 className="mobile">Contact</h1>
      </div>
      <div className="contact-section-header">
        <img src="/images/content-sport.png" alt="content-sport" />
      </div>
      <div className="contact-section-body">
        <div className="container">
          <h1 className="desktop">Contact</h1>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your mail" />
          <div className="textarea-container">
            <textarea type="text" placeholder="Your message" />
            <button className="send-btn" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactSection
