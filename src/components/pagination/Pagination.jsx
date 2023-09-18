'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import styles from './pagination.module.css';

function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        type='button'
        className={styles.button}
        onClick={() => router.push(`/?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        type='button'
        className={styles.button}
        onClick={() => router.push(`/?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

// props
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};
