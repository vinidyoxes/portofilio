import React from 'react'
import styles from './Pc.module.css'
import Logo from '../../../public/logoBranco.svg'
import Link from 'next/link'
import { BsGithub,BsBehance } from 'react-icons/bs'
import {FaBehanceSquare} from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import LinkNav from './Links/LinkNav'
import Button from '../buttons/Button'
import Image from 'next/image'


function Navbar() {
  return (
    <nav  className={`${styles.navbar}`}>
      <div className={`${styles.links}`}>
        <ul className={styles.navLinks} >
          <LinkNav href='/' link='Inicio' />
          <LinkNav href='/about' link='Sobre Mim'></LinkNav>
          <LinkNav href='#' link='Projetos'/>
          <LinkNav href='#' link='Skills'/>
        </ul>
      </div>

      <div className='flex flex-col items-center w-auto'>

      <div className={styles.logoContainer} style={{position:'relative'}}>
        <Image src={Logo} layout='fill' title='Vinicius Henrique'></Image>
      </div>
        <h4>Vini Dyoxes</h4>
      </div>

    <div className={`${styles.otherLinks}`}>
      <ul className={` flex gap-2 items-center`}>
        <Link href="#"className="icon"><BsGithub className='size-2em'></BsGithub></Link>
        <Link href="#"className="icon"><Image src={require('/public/images/devicon-behance.svg')} width="20" height="20"></Image></Link>
        <Link href="#"className="icon"><Image src={require('/public/images/skill-icons-linkedin.png')} width="20" height="20"></Image></Link>
        <Link href="#"className="icon"></Link>
      </ul>

    </div>
      <div className={`${styles.options}`}>
        <Image src={require('/public/images/emojione-v-1-flag-for-brazil.svg')} width={20} height={20}></Image>  
        <span><FiSun/></span>
        </div>
      <div className={styles.menu}><Button>Menu</Button></div>
    </nav>
  )
}



export default PcNav