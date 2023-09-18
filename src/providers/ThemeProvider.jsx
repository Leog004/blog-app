'use client';

import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
