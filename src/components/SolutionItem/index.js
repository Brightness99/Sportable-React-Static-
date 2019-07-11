import React from 'react'
import './styles.scss'

function SolutionItem({ data }) {
  return (
    <div className="solution-item">
      <div className="container">
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.image} />
        <h6>{data.description}</h6>
      </div>
    </div>
  )
}

export default SolutionItem
