'use client'

import React, { useState } from 'react'
import SideBarMotion from '../components/motion/sideBarMotion/SideBarMotion'


function testes() {
  const [toggle, SetToggle] = useState('false')
  console.log(toggle)

  return (
    <>
    <button onClick={() => { SetToggle(!toggle) } }>{toggle ? 'abrir' : 'fechar'}
    </button>
    <SideBarMotion toggle={toggle}>
      <div className='p-12 text-white flex flex-col'>
        <ul>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
        </ul>
      </div>
    </SideBarMotion></>
  )
}

export default testes