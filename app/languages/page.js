
import React from 'react'
import { useRouter } from "next/router";
import languages from '../constants/languages.js'  



function Languages() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { title, content } = languages[locale];


  return (
    <div>{locale}</div>
  )
}

export default Languages