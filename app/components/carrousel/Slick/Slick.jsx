'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Slick({children,settings}) {
    var defaultSettings  = {
      dots: true,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 0,
      pauseOnHover: false,
      swipeToSlide: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }]
      };

      const mergedSettings = { ...defaultSettings, ...settings };

  return (
    <div>
         <Slider {...mergedSettings}>
           {children}
        </Slider>
    </div>
    
  )
}

export default Slick