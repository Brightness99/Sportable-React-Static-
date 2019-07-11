import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'components/Router'
import './styles.scss'

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="header-items">
          <Link to="#technology"><h1>Technology</h1></Link>
          <Link to="#media"><h1>Media</h1></Link>
          <Link to="#performance"><h1>Performance</h1></Link>
          <Link to="#team"><h1>Team</h1></Link>
          <Link to="#contact"><h1>Contact</h1></Link>
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
