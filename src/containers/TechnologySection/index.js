import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import TechnologyItem from '../TechnologyItem'
import Arrow from '../../components/Arrow'
import './styles.scss'

function TechnologySection({ data }) {
  const [paddingLeft, setPaddingLeft] = useState(0)
  const [mobile, setMobile] = useState(false)

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <Arrow isNext={true} color="white" />,
    prevArrow: <Arrow color="white" />
  }

  useEffect(() => {
    const handleResize = () => {
      let padding = 0
      if (window.innerWidth > 992) {
        padding = (window.innerWidth - 1380) / 2 - 60
        setMobile(false)
      } else {
        setMobile(true)
      }
      
      setPaddingLeft(padding > 0 ? padding : 0)
    }

    handleResize();
    window.addEventListener('resize', handleResize)
    
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <div className="technology-section">
      <div className="technology-header">
        <div className="container">
          <h1>Our Technology:</h1>
        </div>
      </div>
      <div className="technology-body" style={{ paddingLeft }}>
        <div className="">
          <Slider
            {...settings}
            dots={!mobile}
          >
            {data.map((item, index) => (
              <TechnologyItem data={item} key={`technology-item-${index.toString()}`}/>
            ))}
          </Slider>
        </div>
      </div>
    </div>

  )
}

export default TechnologySection
