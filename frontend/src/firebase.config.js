// src/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth, sendEmailVerification } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhnQzuk7IE0ZOHHtZSTKHdHycrzZ6OM_g",
  authDomain: "financial-education-f05b6.firebaseapp.com",
  projectId: "financial-education-f05b6",
  storageBucket: "financial-education-f05b6.firebasestorage.app",
  messagingSenderId: "155384413031",
  appId: "1:155384413031:web:bf236111d78303473d0dc2",
  measurementId: "G-SVYPQ5YKNB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function sendVerification(user) {
  return sendEmailVerification(user, { url: window.location.origin + '/login' });
}
