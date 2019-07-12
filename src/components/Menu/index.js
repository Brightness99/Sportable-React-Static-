import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'components/Router'
import './styles.scss'

function Menu({ onClose }) {
  return (
    <div className="menu">
      <div className="container">
        <div className="header-items">
          <a href="#technology" onClick={onClose}><h1>Technology</h1></a>
          <a href="#media" onClick={onClose}><h1>Media</h1></a>
          <a href="#performance" onClick={onClose}><h1>Performance</h1></a>
          <a href="#team" onClick={onClose}><h1>Team</h1></a>
          <a href="#contact" onClick={onClose}><h1>Contact</h1></a>
        </div>
        <nav className="footer-items">
          <Link to="#linkedin" className="footer-icon">
            <SVG
              src="images/linkedin.svg"
              onLoad={(src) => {}}
            />
          </Link>
          <Link to="#facebook">
            <SVG
              src="images/facebook.svg"
              onLoad={(src) => {}}
            />
          </Link>
          <Link to="#twitter">
            <SVG
              src="images/twitter.svg"
              onLoad={(src) => {}}
            />
          </Link>
          <Link to="#instagram">
            <SVG
              src="images/instagram.svg"
              onLoad={(src) => {}}
            />
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Menu
