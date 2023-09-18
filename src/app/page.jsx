import React from 'react';
import Proptypes from 'prop-types';
import Featured from '../components/featured/Featured';
import CategoryList from '../components/categoryList/CategoryList';
import styles from './homepage.module.css';
import CardList from '../components/cardlist/CardList';
import Menu from '../components/menu/Menu';

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page, 10) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      searchParams: query,
    },
  };
}

Home.propTypes = {
  searchParams: Proptypes.shape({
    page: Proptypes.string,
  }),
};

Home.defaultProps = {
  searchParams: {
    page: '1',
  },
};
