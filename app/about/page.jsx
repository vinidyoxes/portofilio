'use client'

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion";

function About() {
  return (
    <><motion.div
      initial={{ opacity: 0, x: -2000 }} // Initial styles
      animate={{ opacity: 1, x: 0 }} // Animation styles
      transition={{ duration: 0.6, delay: 0.2 }} // Animation timing
    >
      {/* Your content goes here */}
      <h1>Welcome to Entrance Motion!</h1>
      <p>This content enters with a smooth motion.</p>
    </motion.div><motion.div
      initial={{ x: -1000 }} // Initial position outside the viewport
      animate={{ x: 0 }} // Animation brings the element to its final position
      transition={{ duration: 0.8 }} // Animation duration
      style={{
        width: 200,
        height: 100,
        background: 'blue',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
      }}
    >
        Slide In Animation
      </motion.div></>
  )
}

export default About