import React from 'react'
import './styles.scss'

function TechnologyItem({ data }) {
  return (
    <div className="technology-item">
      <img src={data.logo} alt={data.logo} />
      <h1>{data.logoTitle}</h1>
      <div className="technology-item-content">
        <div className={`left-content ${data.color}`}>
          <img src={data.image} alt={data.image} />
        </div>
        <div className="right-content">
          <h5>{data.title}</h5>
          <h6>
            {data.description}
          </h6>
          {
            data.list.map((item, index) => (
              <div key={`dot-content-${index.toString()}`} className="dot-content">
                <div className="dot" />
                <h6>{item}</h6>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default TechnologyItem
