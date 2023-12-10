import React from 'react'
import { technologies } from '@/app/constants'
import Slick from '../Slick/Slick'
import Image from 'next/image'
import styles from './carrousel.module.css'


function Carrousel() {
  return (
    <div className={styles.carrousel}>
    <Slick>
{        technologies.map((item,index)=>{
         return(
            <div key={index}>

                 <div className={styles.technology} style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
                     <span style={{width:'50px', height:'50px', overflow:'hidden', display:'block', position:'relative'}}><Image src={item.icon} layout="fill" objectFit="contain" ></Image></span>
                     <h4>{item.name}</h4>
                 </div>

            </div>
     
         )
        })}
        
    </Slick>

    </div>
  )
}

export default Carrousel