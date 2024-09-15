'use client'

import React from 'react'
import { motion } from "framer-motion"
import Vanta from '../components/vanta/Vanta'
import { useTheme } from 'next-themes'
import CertificationCard from '../components/CertificationCard/CertificationCard'
import Certifications from './certifications.json'
import Slick from '../components/carrousel/Slick/Slick'
import FadeInAnimation from '../components/motion/fadeIn/FadeIn'
import SideBarMotion from '../components/motion/sideBarMotion/SideBarMotion'
import FadeInUpAnimation from '../components/motion/fadeInUp/FadeInUp'
import { Experiences } from '../components/Experiences/Experiences.jsx'
import experiences from  './experiences.json'







function About() {
  const customSettings = {
    centerMode: true, 
    swipeToSlide: true,
    speed: 500,
    className: "center",
    centerMode: false,
    infinite: false,
    autoplay:false,
    centerPadding: "20px",
    slidesToShow: 4,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: false, 
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          infinite: false,
          centerPadding: "20px",
          slidesToShow: 1,
          speed: 500,
          dots: true
        } 
      },
    ]
  };
  return (
    <main className='box-border max-w-full overflow-hidden'>
    <section className=' flex flex-col justify-center items-center px-0 lg:px-20 box-border max-w-full '>
      <div className='max-w-full w-full'> {/* Adicione um contêiner com largura máxima */}
        <div className={`flex flex-col justify-center md:justify-center lg:justify-start gap-y-2 box-border py-12`}>

          <div className='flex flex-col texts items-center md:items-center lg:items-start box-border py-12'>
              <FadeInAnimation>
                  <h2 className='font-bold text-2xl lg:text-3xl'>Experience 👨‍💻 </h2>
                  <p>{`My work experience`}</p>
              </FadeInAnimation>
            <Experiences experiences={experiences}></Experiences>
            </div>

          
          <div className='flex flex-col texts items-center md:items-center lg:items-start box-border py-12'>
            <FadeInAnimation>
                <h2 className='font-bold text-2xl lg:text-3xl'>Degree and Certificates 🥇</h2>
                <p>{`Courses that I've completed`}</p>
            </FadeInAnimation>
          </div>
          
          
          <FadeInUpAnimation>

          
              <Slick settings={customSettings} >
                  {Certifications.map((project, index) => {
                    return (
                      <CertificationCard project={project} key={index}></CertificationCard>
                      )
                    })}

              </Slick>
          
          </FadeInUpAnimation>
            </div>
          </div>
    </section>
  </main>
  )
}

export default About