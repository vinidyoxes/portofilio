'use client'
import React, { useState } from 'react'
import styles from './Checkbox.module.css'
import { useTheme } from 'next-themes'


const CheckboxDivColorChange = ({name}) => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleDivClick = () => {
      setIsChecked(!isChecked);
    };
  
  
    return (
      <div>
        <div className={`${styles.checkbox} ${styles[isChecked ? 'checked' : '']}`}
          onClick={handleDivClick}
          //style={{backgroundColor: isChecked ? 'var(--primary-blue)' : ''}}
        >
          {name}
        </div>
      </div>
    );
  };
  
  export default CheckboxDivColorChange;