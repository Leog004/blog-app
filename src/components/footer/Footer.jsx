import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={50} height={50} />
          <h1>Leo Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='facebook icon' width={18} height={18} />
          <Image src='/tikTok.png' alt='tikTok icon' width={18} height={18} />
          <Image src='/instagram.png' alt='instagram icon' width={18} height={18} />
          <Image src='/youtube.png' alt='youtube icon' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/blog'>Fashion</Link>
          <Link href='/about'>Coding</Link>
          <Link href='/contact'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/blog'>Instagram</Link>
          <Link href='/about'>TitTok</Link>
          <Link href='/contact'>Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

