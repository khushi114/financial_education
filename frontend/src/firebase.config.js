import { initializeApp } from 'firebase/app';
import { getAuth, sendEmailVerification } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  // ...other values from Firebase console
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function sendVerification(user) {
  return sendEmailVerification(user, {
    url: process.env.REACT_APP_CONFIRM_EMAIL_REDIRECT || window.location.origin,
  });
}
