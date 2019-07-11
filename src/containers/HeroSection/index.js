import React from 'react'

import './styles.scss'

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-details">
        <div className="container">
          <h1>Game In<br />Numbers</h1>
          <h6>The world's first fully integrated wearable and embedded technology platform that empowers teams of all levels, media and officials through completely new forms of content. The result; enhanced performance, more fans, more engaged and advanced match officiation.</h6>
        </div>
      </div>
      <div className="hero-number">
        <div className="container">
          <h3>01100100</h3>
        </div>
      </div>
      <div className="bg-image-container">
        <img className="hero-lines" src="images/hero-lines-bg.png" alt="hero-lines" />
        <img className="hero-sport" src="images/hero-sport.png" alt="hero-sport" />
      </div>
    </div>
  )
}

export default HeroSection
