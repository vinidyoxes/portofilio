import React from 'react'
import Link from 'next/link'
import styles from './link.module.css'

function LinkNav({href,link}) {
  return (
    <li className={styles.link}><Link href={`${href}`}>{link}</Link></li>
  )
}

export default LinkNav