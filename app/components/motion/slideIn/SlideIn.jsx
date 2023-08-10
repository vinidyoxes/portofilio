'use client'
import {motion} from 'framer-motion'
import React from 'react'


const SlideFadeAnimation = ({ children, direction = 'right' }) => {
    const variants = {
      hidden: {
        opacity: 0,
        x: direction === 'right' ? '-100%' : '100%',
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    };
  
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  };
  
  export default SlideFadeAnimation;