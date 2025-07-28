import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import User from './models/User.js';

const app = express();
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');
    await User.createCollection(); // Ensures 'users' collection is created upfront
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));

app.use('/api/user', userRoutes);
app.get('/health', (req, res) => res.send('OK'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
