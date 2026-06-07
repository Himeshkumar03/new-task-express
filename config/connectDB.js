import dns from 'dns';
import mongoose from 'mongoose';
import { MONGODB_URI } from './configs.js';

dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables');
  }

  await mongoose.connect(MONGODB_URI);

  console.log('MongoDB connected');
};
