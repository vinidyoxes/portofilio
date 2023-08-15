'use client'

import styles from './about.module.css'
import React from 'react'
import { motion } from "framer-motion"
import Vanta from '../components/vanta/Vanta'
import { useTheme } from 'next-themes'



function About() {
  return (
    <main>
      <section className='flex justify-center items-center min-h-full'>

        <h1>About Me</h1>
      </section>
      <div className={styles.backgroundVanta}>

        <Vanta></Vanta>

      </div>
    </main>
  )
}

export default About