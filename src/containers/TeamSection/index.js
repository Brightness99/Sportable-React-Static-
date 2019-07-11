import React from 'react'
import Slider from "react-slick";
import Arrow from '../../components/Arrow'

import './styles.scss'

function TeamSection({ data }) {
  const settings = {
    className: "center",
    infinite: false,
    dots: true,
    slidesToShow: 4,
    speed: 500,
    nextArrow: <Arrow isNext={true} />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.6,
        }
      },
    ]
  }

  return (
    <div className="team-section">
      <div className="container">
        <h4>01100100</h4>
        <h1>Our Team</h1>
      </div>
      <div className="team-slider">
        <div className="container">
          <Slider
            {...settings}
          >
            {
              data.map((item, index) => (
                <div key={`team-item-${index.toString()}`} className="team-item">
                  <img src={item.image} alt={item.image} />
                  <h6 className="bold">{item.name}</h6>
                  <h6>{item.position}</h6>
                  <h6>{item.description}</h6>
                  <button className="more">Read more</button>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>

  )
}

export default TeamSection
