'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Slick({children}) {
    var settings = {
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      cssEase: "linear",
      };

  return (
    <div>
         <Slider {...settings}>
           {children}
        </Slider>
    </div>
    
  )
}

export default Slick