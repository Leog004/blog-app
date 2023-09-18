/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './loginPage.module.css';

function LoginPage() {
  const {
    data,
    status,
  } = useSession();

  const router = useRouter();

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'authenticated') {
    return router.push('/');
  }

  console.log(data, status);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={() => signIn('google')} className={styles.socialButton}>
          Sign Up with Google
        </div>
        <div className={styles.socialButton}>Sign Up with Github</div>
        <div className={styles.socialButton}>Sign Up with Facebook</div>
      </div>
    </div>
  );
}

export default LoginPage;
