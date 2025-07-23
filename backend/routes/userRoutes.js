import express from 'express';
import verifyToken from './middleware/verifyToken.js';
import User from '../models/User.js';
import admin from '../services/firebase.js';

const router = express.Router();

router.get('/me', verifyToken, async (req, res) => {
  let user = await User.findOne({ firebaseUid: req.uid });
  if (!user) {
    const fbUser = await admin.auth().getUser(req.uid);
    user = await User.create({
      firebaseUid: req.uid,
      email: fbUser.email,
      name: fbUser.displayName
    });
  }
  res.json(user);
});

export default router;
