import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import cors from 'cors';  // Import cors
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js';
import path from 'path';
import allowed_origins from './allowed_origins.js';
import corsOptions from './corsOptions.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();


// Use CORS middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/post', postRoutes);
app.get('/test', (req, res) => {
  // send a json response
  res.json({ message: 'Hello World' });
});
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const options = {
  key: fs.readFileSync('/home/pandey/pallavi/gokul_repos/mern-blogg/api/localhost-key.pem'),
  cert: fs.readFileSync('/home/pandey/pallavi/gokul_repos/mern-blogg/api/localhost.pem'),
};

// https.createServer(options, app).listen(3000, () => {
//   console.log('Server is running on https://localhost:3000');
// });
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
