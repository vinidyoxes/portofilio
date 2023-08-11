import React from 'react'
import styles from './button.module.css'
import { HiOutlineExternalLink } from 'react-icons/hi'

function Button({children,style,icon,styled}) {
  return (
    <button  style={styled} className={` ${styles.button} ${styles[style]}`}>{children}{icon ? <HiOutlineExternalLink/> : null}</button>
  )
}

export default Button
