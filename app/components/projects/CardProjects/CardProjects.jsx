import React from 'react'
import LazyMotionAnimation from '../../motion/lazyMotion/LazyMotion'
import styles from './card.module.css'
import Image from 'next/image'
import Button from '../../buttons/Button'
import Link from 'next/link'


function CardProjects({project}) {

  console.log({})
  return (

       <div className={`${styles.card} group rounded-3xl sm:min-h-300 relative`}>
  <div className={styles.overlay}>
    <div className={styles.content__overlay}>
        <div className='project-texts my-5'>
          <h3 className='font-extrabold font-display' >{project.company}</h3>
          <p>{project.name}</p>
        </div>
      <div className={`flex justify-center ${styles.buttons}` }>
        {project.viewProject === '#' ? '' : (
          <Link target='_blank' href={project.viewProject}>
            <Button style='line' icon='true' styled={{color:"white"}}>
              View Live Project
            </Button>
          </Link>
        )}
        {project.viewDetails ==='#' ? '' : (
          <Link target='_blank' href={project.viewDetails}>
            <Button style='line' styled={{color:"white"}}>
              View on Behance
            </Button>
          </Link>)}
      </div>
    </div>
  </div>
  <Image src={`${project.img}`} layout='fill' className='rounded-lg' />
</div>

  )
}


CardProjects.defaultProps = {
  project: {
    viewProject: '#',
  },
};

export default CardProjects