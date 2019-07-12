import React from 'react'
import SVG from 'react-inlinesvg';
import './styles.scss'

function SolutionSection({ data, onSelect }) {
  return (
    <div id="media" className="solution-section">
      <div className="container">
        <h2>Solutions:</h2>
        <div className="solution-details">
          {
            data.map((item, index) => (
              <div
                key={`solution-detail-${index.toString()}`}
                className="solution-detail"
                onClick={() => onSelect(item)}
              >
                <img src={item.image} alt={item.image} />
                <div className="solution-desc">
                  <h4>
                    <span>{item.title}</span>
                    <SVG
                      className="arrow-right"
                      src="/images/arrow-right.svg"
                    />
                  </h4>
                  <h6>{item.description}</h6>
                </div>
              </div>
            ))
          }
        </div>
        <h3 className="sport-number">01100100</h3>
      </div>
    </div>

  )
}

export default SolutionSection
