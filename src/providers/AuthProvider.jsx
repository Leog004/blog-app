/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import PropTypes from 'prop-types';

function AuthProvider({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
