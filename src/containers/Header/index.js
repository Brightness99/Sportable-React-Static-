import React from 'react'
import SVG from 'react-inlinesvg'
import './styles.scss'

function Header({ onMenuClick }) {
  return (
    <div className="header">
      <div className="header-white-line" />
      <div className="container">
        <img className="header-logo" src="images/nav-logo.png" alt="logo" />
        <button className="header-button" onClick={onMenuClick} >
          <SVG  src="/images/hamburger.svg" />
        </button>

        <nav className="header-items">
          <a href="#technology">TECHNOLOGY</a>
          <a href="#media">MEDIA</a>
          <a href="#performance">PERFORMANCE</a>
          <a href="#team">TEAM</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
