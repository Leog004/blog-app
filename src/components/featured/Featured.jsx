import React from 'react';
import Image from 'next/image';
import styles from './featured.module.css';

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Leo here! </b>
        Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse, vero excepturi culpa eum, temporibus hic nam tempore,
            laborum ipsam eaque repellat sed repellendus unde ipsum fuga aliquid quaerat nemo saepe.
          </p>
          <button type='button' className={styles.button}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
