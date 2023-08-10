'use client'

import React, { useState } from 'react'
import SideBarMotion from '../components/motion/sideBarMotion/SideBarMotion'


function Testes() {
  const [Toggle, SetToggle] = useState('false')
  console.log(Toggle)

  return (
    <>
    <button onClick={() => { SetToggle(!Toggle) } }>{Toggle ? 'abrir' : 'fechar'}
    </button>
    <SideBarMotion Toggle={Toggle}>
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

export default Testes