import React from 'react'
import SVG from 'react-inlinesvg'
import { Link } from 'components/Router'

import './styles.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner container">
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

export default Footer
