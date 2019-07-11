import React from 'react'

import './styles.scss'

const analysisData = [
  {
    icon: '/images/loading-analysis.png',
    title: 'Loading Analysis',
    description: 'Rich, robust data to manage the real stress on player\'s bodies',
  },
  {
    icon: '/images/automation.png',
    title: 'Automation',
    description: 'Instantly recognises and ranks events that are otherwise invisible to the human eye',
  },
  {
    icon: '/images/tactical-analysis.png',
    title: 'Tactical Analysis',
    description: 'Integrates multiple data streams to provide objective insights into strategic areas of play',
  },
]

function AnalysisSection() {
  return (
    <div className="analysis-section">
      <div className="analysis-section-header">
        <div className="container">
          <h1>AI</h1>
          <h1 className="small">
            {`Our Analysis is greater thank the sum of its parts`}
          </h1>
          <h6>
            {`
            In order to make sense of vast amounts 
            of data we utilise patented algorithms and a strict data science approach 
            to analysis.
            `}
          </h6>
        </div>
      </div>
      <div className="analysis-section-body">
        <div className="container">
          {analysisData.map((item, index) => (
            <div key={`analysis-item-${index.toString()}`} className="analysis-item">
              <img src={item.icon} alt={item.icon} />
              <div className="item-details">
                <h5>{item.title}</h5>
                <h6>{item.description}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default AnalysisSection
