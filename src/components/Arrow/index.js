import React from 'react'
import SVG from 'react-inlinesvg'
import './styles.scss'

function Arrow(props) {
  const { className, onClick, color } = props
  
  return (
    <div
      className={`${className} custom-arrow ${color === 'white' ? 'white-arrow' : ''}`}
      onClick={onClick}
    >
      {
        props.isNext ? (
          <SVG
            src="/images/arrow-right.svg"
            className="arrow arrow-right"
            onLoad={(src) => {}}
          />
        ) : (
          <SVG
            src="/images/arrow-left.svg"
            className="arrow arrow-left"
            onLoad={(src) => {}}
          />
        )
      }
    </div>
  )
}

export default Arrow
