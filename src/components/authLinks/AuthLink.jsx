/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import styles from './authLink.module.css';

export default function AuthLink() {
  const [open, setOpen] = React.useState(false);
  // temporary
  const { status } = useSession();

  // return login link if not logged in else return write and logout links

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link className={styles.link} href='/login'>Login </Link>
      )
        : (
          <>
            <Link className={styles.link} href='/write'>Write</Link>
            <span className={styles.link} onClick={signOut}>Logout</span>
          </>
        )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <Link href='/#'>Home</Link>
            <Link href='/#'>Contact</Link>
            <Link href='/#'>About</Link>
            {status === 'NA' ? (
              <Link href='/login'>Login </Link>
            )
              : (
                <>
                  <Link href='/write'>Write</Link>
                  <span>Logout</span>
                </>
              )}
          </div>
        )
      }
    </>
  );
}
