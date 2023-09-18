/* eslint-disable no-undef */

'use client';

import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const getFromLocalStorage = (key) => {
  if (typeof window === 'undefined') return 'light';

  const value = localStorage.getItem(key);

  if (value) return JSON.parse(value);

  return 'light';
};

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState(() => getFromLocalStorage('theme'));

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
