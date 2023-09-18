/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'blogapp-399121.firebaseapp.com',
  projectId: 'blogapp-399121',
  storageBucket: 'blogapp-399121.appspot.com',
  messagingSenderId: '188335312879',
  appId: '1:188335312879:web:0db31201570699bb7a301a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
