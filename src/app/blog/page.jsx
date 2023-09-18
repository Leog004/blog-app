import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../../components/cardlist/CardList';
import Menu from '../../components/menu/Menu';
import styles from './blogPage.module.css';

function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page, 10) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {cat}
        {' '}
        Blog
      </h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage;

export async function getServerSideProps({ query }) {
  return {
    props: {
      searchParams: query,
    },
  };
}

// props
BlogPage.propTypes = {
  searchParams: PropTypes.shape({
    page: PropTypes.string,
    cat: PropTypes.string,
  }),
};

BlogPage.defaultProps = {
  searchParams: {
    page: '1',
    cat: '',
  },
};
