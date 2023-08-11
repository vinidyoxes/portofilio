import React from 'react'
import LazyMotionAnimation from '../../motion/lazyMotion/LazyMotion'
import styles from './card.module.css'
import Image from 'next/image'


function CardProjects({project}) {
  return (

        <div className={`${styles.card} group rounded-3xl w-fill min-h-300 relative hover:opacity-30 w-full h-full transition-all duration-500`} style={{minHeight:'300px'}}>
            <Image src={`${project.img}`} layout='fill'></Image>
       </div>

  )
}

export default CardProjects