import Image from 'next/image'
import React from 'react'
import styles from './certification.module.css'

function CertificationCard({project}) {
  return (
    <div className={styles.card}>
        <Image 
        width={50}
        height={50}
        src={project.img}></Image>
        <div className='title'>
            <h2 className='text-xl font-semibold'>{project.course}</h2>
            <div className='flex flex-row text-base font-thin gap-2'>
                <span>{project.company}</span>
                <span> — </span>
                <span>{project.date}</span>
            </div>
        </div>
        <div className={styles.description}>
            <p>{project.description}</p>
        </div>

    </div>
  )
}

export default CertificationCard