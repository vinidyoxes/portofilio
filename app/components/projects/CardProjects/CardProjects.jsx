import React from 'react'
import LazyMotionAnimation from '../../motion/lazyMotion/LazyMotion'
import styles from './card.module.css'
import Image from 'next/image'
import Button from '../../buttons/Button'
import Link from 'next/link'


function CardProjects({project}) {

  console.log({})
  return (

        <div className={`${styles.card} group rounded-3xl sm:min-h-300 relative w-500 h-400`}>
            <div className={styles.overlay}>
              <div className={styles.content__overlay}>
                <h3>{project.company}</h3>
                <p>{project.name}</p>
                  <div className='flex justify-center'>
                <Link target='_blank' href={project.viewProject}><Button style='line' icon='true' styled={{color:"white"}}>View Project</Button></Link>
                <Link target='_blank' href={project.viewDetails}><Button style='line' styled={{color:"white"}}>View Details</Button></Link>

                  </div>

              </div>
            </div>
            <Image src={`${project.img}`} layout='fill' className='rounded-lg'></Image>
       </div>

  )
}


CardProjects.defaultProps = {
  project: {
    viewProject: '#',
  },
};

export default CardProjects