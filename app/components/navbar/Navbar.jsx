'use client'
import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../../public/logoBranco.svg'
import LogoBlack from '../../../public/logoPreto.svg'
import Link from 'next/link'
import { BsGithub ,BsBehance } from 'react-icons/bs'
import {FaBehanceSquare} from 'react-icons/fa'
import { FiSun,FiMoon } from 'react-icons/fi'
import LinkNav from './Links/LinkNav'
import Button from '../buttons/Button'
import Image from 'next/image'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import { IconContext } from "react-icons";
import { useTheme } from 'next-themes'




function Navbar() {
  const [mounted, setMounted] = useState('false');
  useEffect(() => setMounted(true), []);

  
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false); // Changed SetToggle to setToggle
  const handleClick = () => {
    setToggle(!toggle);
  }
  
  if (!mounted) {
    return null;
  }
  return (
    <nav  className={`${styles.navbar}`}>

      <div className={`${styles.links}`}>
        <ul className={styles.navLinks} >
          <LinkNav href='/' link='Inicio' />
          <LinkNav href='/about' link='Sobre Mim'></LinkNav>
          <LinkNav href='/projects' link='Projetos'/>
          <LinkNav href='#' link='Skills'/>
        </ul>
      </div>

        <div className={styles.logoDiv}>

        <Link href='/'>
        <div className={styles.logoContainer} style={{position:'relative'}}>
          <Image src={theme === "dark" ? Logo : LogoBlack} layout='fill' title='Vinicius Henrique' alt='my personal photo'></Image>
        </div>
          <h4>Vini Dyoxes</h4>
        </Link>

        </div>

    <div className={`${styles.otherLinks}`}>
      <ul className={` flex gap-2 items-center social`}>
        <Link target='_blank' href="https://github.com/vinidyoxes/"className="icon"><IconContext.Provider value={{size:'20px'}}><BsGithub/></IconContext.Provider></Link>
        <Link target='_blank' href="https://www.behance.net/vinidyoxes"className="icon"><Image src={require('/public/images/devicon-behance.svg')} width="25" height="25"></Image></Link>
        <Link target='_blank' href="https://www.linkedin.com/in/viniciushenrique-silva/"className="icon"><Image src={require('/public/images/skill-icons-linkedin.png')} width="25" height="25"></Image></Link>
        <Link href="#"className="icon"></Link>
      </ul>
    </div>

      <div className={`${styles.options}`}>
        <Image src={require('/public/images/emojione-v-1-flag-for-brazil.svg')} width={20} height={20}></Image>  
         <span className='cursor-pointer' onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}}>
 
          {theme === "dark" ? <FiMoon size={20}/> : <FiSun size={20}/>}
          </span>
        </div>
      <div className={styles.menu}>

     <Link href='#'onClick={handleClick}><Button><FiMenu size={20} color = {theme === 'dark' ? 'white' : 'black'} /></Button></Link>  
      </div>



    {/* ------------------Sidebar----------------- */}
    {

      <div className={`${styles.sideBar} ${!toggle ? 'opened' : 'closed'}`}>
        

        <div className={styles.closeNav} onClick={(event)=>{setToggle(!toggle);}}>
          <IconContext.Provider  value={{size:'16px', backgroundColor:'white', color:'white'}}>
            <GrClose/>
          </IconContext.Provider>
        </div>


        <div className={`${styles.links}`}>
          <ul className={styles.navLinks} >
            <LinkNav href='/' link='Inicio' />
            <LinkNav href='/about' link='Sobre Mim'></LinkNav>
            <LinkNav href='#' link='Projetos'/>
            <LinkNav href='#' link='Skills'/>
          </ul>
        </div>

        <div className={`${styles.otherLinks}`}>
      <ul className={` flex gap-4 items-center`}>
        <Link href="https://github.com/vinidyoxes/"className="icon"><BsGithub className='size-2em'></BsGithub></Link>
        <Link href="https://www.behance.net/vinidyoxes"className="icon"><Image src={require('/public/images/devicon-behance.svg')} width="20" height="20"></Image></Link>
        <Link href="https://www.linkedin.com/in/viniciushenrique-silva/"className="icon"><Image src={require('/public/images/skill-icons-linkedin.png')} width="20" height="20"></Image></Link>
      </ul>
    </div>
    <div className={`${styles.options}`}>
        <Image src={require('/public/images/emojione-v-1-flag-for-brazil.svg')} width={20} height={20}></Image>  
       
       
        <span className='cursor-pointer' onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}}>
 
          {theme === "dark" ? <FiMoon size={20}/> : <FiSun size={20}/>}
          </span>


        </div>

      </div>

    }
    </nav>
    
  )
}



export default Navbar