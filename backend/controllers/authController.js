import admin from '../services/firebase.js';
import { sendOtpToPhone, verifyOtpCode } from '../services/twilio.js';
import jwt from 'jsonwebtoken';

export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  try {
    const ver = await sendOtpToPhone(phone);
    res.json({ status: ver.status });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const verifyOtp = async (req, res) => {
  const { phone, code } = req.body;
  try {
    const check = await verifyOtpCode(phone, code);
    if (check.status === 'approved') {
      let userRecord;
      try {
        userRecord = await admin.auth().getUserByPhoneNumber(phone);
      } catch {
        userRecord = await admin.auth().createUser({ phoneNumber: phone });
      }
      const token = jwt.sign({ uid: userRecord.uid }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });
      res.json({ token });
    } else {
      res.status(400).json({ error: 'Invalid code' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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
