import admin from '../services/firebase.js';
import jwt from 'jsonwebtoken';

export const googleAuth = async (req, res) => {
  const { idToken } = req.body;
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const token = jwt.sign({ uid: decoded.uid }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: 'Invalid Google token' });
  }
};

// If you decide to support backend phone/email-password creation:
// export const RegisterWithEmail = async (req, res) => {
//   // similar to getUid, then create in mongo
// };
