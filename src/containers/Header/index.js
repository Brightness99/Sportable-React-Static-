import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'components/Router'
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
          <Link to="#technology">TECHNOLOGY</Link>
          <Link to="#media">MEDIA</Link>
          <Link to="#performance">PERFORMANCE</Link>
          <Link to="#team">TEAM</Link>
          <Link to="#contact">CONTACT</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
