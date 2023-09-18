/* eslint-disable react/no-danger */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './card.module.css';

function Card({
  title, date, category, desc, image, slug,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={image} alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {date.substring(0, 10)}
            {' '}
            -
            {' '}
          </span>
          <Link href={`/blog?cat=${category}`}>
            <span className={styles.category}>{category}</span>
          </Link>
        </div>
        <Link href={`/posts/${slug}`}>
          <h1>{title}</h1>
        </Link>
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: desc.substring(0, 300) }} />
        <Link href={`/posts/${slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;

// props
Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
};

// defaultProps
Card.defaultProps = {
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
  date: '01 Jan 2021',
  category: 'Tech',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
  image: '/image.png',
  slug: 'tech_page',
};
