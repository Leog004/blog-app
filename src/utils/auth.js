/* eslint-disable import/no-extraneous-dependencies */

import { PrismaAdapter } from '@auth/prisma-adapter';
import Githubprovider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from 'next-auth';
import prisma from './connect';

// eslint-disable-next-line import/prefer-default-export
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Githubprovider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
