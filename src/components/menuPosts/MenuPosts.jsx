import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './menuPosts.module.css';

function MenuPosts({
  category, postTitle, username, date, image,
}) {
  return (
    <Link href='/#' className={styles.item}>
      {/* has image then show */}
      {image && (
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles[category]}`}>{category}</span>
        <h3 className={styles.postTitle}>{postTitle}</h3>
        <div className={styles.detail}>
          <span className={styles.username}>{username}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </Link>
  );
}

// PROTYPES
MenuPosts.propTypes = {
  category: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  // image not required and has default declaration value string
  image: PropTypes.string,
};

MenuPosts.defaultProps = {
  image: '',
};

export default MenuPosts;
