import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config';
import loanRoutes from './loanroutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', loanRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
