import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import AuthLink from '../authLinks/AuthLink';
import ThemeToggle from '../themeToggle/ThemeToggle';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='Facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='Instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='TikTok' width={24} height={24} />
        <Image src='/youtube.png' alt='Youtube' width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Link href='/'>
          Leo Blog
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href='/#'>Home</Link>
        <Link className={styles.link} href='/#'>Contact</Link>
        <Link className={styles.link} href='/#'>About</Link>
        <AuthLink />
      </div>
    </div>
  );
}

export default Navbar;
