import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './categoryList.module.css';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

function CategoryComponent({ thisCategory, image }) {
  return (
    <Link href={`/blog?cat=${thisCategory}`} className={`${styles.category} ${styles[thisCategory]}`}>
      {
        image
        && (
          <Image
            src={image}
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
        )
      }
      {
        thisCategory
      }
    </Link>
  );
}

CategoryComponent.propTypes = {
  thisCategory: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

async function CategoryList() {
  const data = await getData();

  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          data && data.map((category) => (
            <CategoryComponent
              key={category.id}
              thisCategory={category.title}
              image={category.img}
            />
          ))
        }
      </div>
    </div>
  );
}

export default CategoryList;
