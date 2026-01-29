import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/connectDB.js';
import cors from 'cors';
import conRoute from './routes/contant.js';

dotenv.config();

const app = express();
const PORT =  process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));

 app.use('/api/v1/contact', conRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});