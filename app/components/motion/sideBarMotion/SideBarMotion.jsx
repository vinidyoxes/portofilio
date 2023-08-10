'use client'

import { motion } from 'framer-motion'
import React from 'react'


function SideBarMotion({children, toggle}) {
    console.log(toggle)
  return (
    <motion.div className='p-12 text-white flex flex-col' style={{right:"-100%"}}
    animate={{right: toggle ? '-100%' : '-1%', height:'100%', position:'absolute', opacity:'100%'
}}
    transition={{type:'spring', duration:'1'}}
    initial={{ opacity:'0%' , backgroundColor:'red'}}
    >{children}

</motion.div>
  )
}

export default SideBarMotion