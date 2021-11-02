//import dotenv from 'dotenv';
import express from 'express';
import peopleRouter from './routes/people.js';
import entityRouter from './routes/entities.js';
import mongoose from 'mongoose';

/**
 * Using enviroment variables to connect to MongoDB
 */
//dotenv.config()
mongoose.connect(process.env.DB_URL)

/**
 * app: Initializing express.js 
 * PORT: Choosing a port to run API on
 * db: Connecting to MongoDB server from mongoose
 */
const app = express();
const PORT = 80; 
const db = mongoose.connection

/**
 * Setting CSP
 */
app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src 'self'"
    );
    next();
  });

/**
 * Testing MongoDB connection
 */
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to MongoDB'));

/**
 * Using JSON as output format 
 * 
 * Choosing /people route for PEP check
 * Choosing /entities route of organizational entities 
 */
app.use(express.json());
app.use('/people', peopleRouter);
app.use('/entities', entityRouter)

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));