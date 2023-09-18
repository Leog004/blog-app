import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/Pagination';
import styles from './cardlist.module.css';
import Card from '../card/Card';

const getData = async (page, cat = '') => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat}`, {
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

async function CardList({ page, cat }) {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {
          posts && posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              date={post.createdAt}
              category={post.catSlug}
              author={post.userEmail}
              image={post.img || '/p1.jpeg'}
              slug={post.slug}
              desc={post.desc}
            />
          ))
        }
      </div>
      <Pagination hasNext={hasNext} hasPrev={hasPrev} page={page} />
    </div>
  );
}

export default CardList;

// props

CardList.propTypes = {
  page: PropTypes.number.isRequired,
};
