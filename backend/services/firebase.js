import admin from 'firebase-admin';
import 'dotenv/config';

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

export default admin;
