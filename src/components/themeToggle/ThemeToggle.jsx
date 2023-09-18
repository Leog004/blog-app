'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './themeToggle.module.css';
import { ThemeContext } from '../../context/ThemeContext';

function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggle();
  };

  const containerStyle = theme === 'dark'
    ? {
      backgroundColor: 'white',
    }
    : {
      backgroundColor: '#0f172a',
    };

  const ballStyle = theme === 'dark'
    ? {
      left: 1, background: '#0f172a',
    }
    : {
      right: 1, background: 'white',
    };

  return (
    <div
      className={styles.container}
      style={containerStyle}
      onClick={handleToggle}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggle();
        }
      }}
    >
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <div className={styles.ball} style={ballStyle} />
      <Image src='/sun.png' alt='sun' width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
