'use client'
// components/SkillBar.js
import React, { useEffect } from 'react';
import styles from './skillbar.module.css'; // Import your CSS module

const SkillBar = ({ label, percentage }) => {
  const skillRef = React.createRef();

  useEffect(() => {
    const skillBar = skillRef.current;
    skillBar.style.width = `${percentage}%`;
  }, [percentage]);

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillLabel}>{label}</div>
      <div ref={skillRef} className={styles.bar}></div>
    </div>
  );
};

export default SkillBar;
