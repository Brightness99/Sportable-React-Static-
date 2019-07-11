import React, { useEffect } from 'react'
import SVG from 'react-inlinesvg'
import './styles.scss'

function ModalSection({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  return (
    <div className="modal-section">
      <div className="modal-white-line" />
      <div className="container">
        <img className="modal-logo" src="images/nav-logo-red-light.png" alt="logo" />
        <button className="modal-button" onClick={onClose} >
          <SVG src="/images/close.svg" />
        </button>
      </div>

      <div className="modal-content">
        {children}
      </div>
    </div>

  )
}

export default ModalSection
