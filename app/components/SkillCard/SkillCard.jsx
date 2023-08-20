import React from 'react'
import { technologies } from '@/app/constants'
import Image from 'next/image'
import styles from './skillcard.module.css'


function SkillCard({title}) {
    const lowerCase = title.toLowerCase()
    const filteredTechs = technologies.filter(technology => {  return ( technology.type === lowerCase)})
  return (
    <div className={styles.wrap}>
        <h2 className={styles.title}>{title}</h2>
        <section className={styles.skillCard}>
        {filteredTechs.map((item,index) =>{

            return (

                <div key={index} className='icon__Container w-12 h-12 relative'>
                <Image src={item.icon} layout='fill'></Image>
                </div>

)
})}
    </section>
    </div>
  )
}

export default SkillCard