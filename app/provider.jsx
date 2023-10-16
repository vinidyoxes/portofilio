'use client'

import React, { useState, useEffect } from 'react'

import { ThemeProvider } from "next-themes";


function Provider({children}) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true),[]);
  if(!mounted){ return <>{children}</>}

  return (
    <ThemeProvider defaultTheme='dark'>
        {children}
    </ThemeProvider>
  )
}

export default Provider