'use client'

import styles from './about.module.css'
import React from 'react'
import { motion } from "framer-motion"
import Vanta from '../components/vanta/Vanta'
import { useTheme } from 'next-themes'
import CertificationCard from '../components/CertificationCard/CertificationCard'
import Certifications from './certifications.json'



function About() {
  return (
    <main>
      <section className='flex flex-col justify-center items-center min-h-full px-14'>
        <h1>About Me</h1>
        <div className='px-10 flex flex-row gap-5 flex-wrap justify-start items-center'>
            {Certifications.map((project,index)=>{
              return(
                <CertificationCard project={project}></CertificationCard>
                
              )
            })
    }
          
        </div>
      </section>
      
    </main>
  )
}

export default About