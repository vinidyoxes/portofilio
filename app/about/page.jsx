'use client'

import React from 'react'
import { motion } from "framer-motion"
import Vanta from '../components/vanta/Vanta'
import { useTheme } from 'next-themes'
import CertificationCard from '../components/CertificationCard/CertificationCard'
import Certifications from './certifications.json'
import Slick from '../components/carrousel/Slick/Slick'



function About() {
  const customSettings = {
    dots: true,
    pauseOnHover: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "20px",
          slidesToShow: 1,
          speed: 500,
          dots: true
        }
      }]
  };
  return (
    <main className='box-border max-w-full'>
    <section className='overflow-hidden flex flex-col justify-center items-center min-h-full px-0 lg:px-36 box-border max-w-full '>
      <div className='max-w-full w-full'> {/* Adicione um contêiner com largura máxima */}
        <div className={`flex flex-col justify-center md:justify-center lg:justify-start gap-y-2 box-border`}>
          
          <div className='flex flex-col texts items-center md:items-center lg:items-start box-border py-12'>
            <h2 className='font-bold text-2xl lg:text-3xl'>Degree and Certificates</h2>
            <p>{`Courses that I've completed`}</p>
          </div>

          <Slick settings={customSettings} >
              {Certifications.map((project, index) => {
                return (
                  <CertificationCard project={project} key={index}></CertificationCard>
                )
              })}

          </Slick>
            </div>
          </div>
    </section>
  </main>
  )
}

export default About