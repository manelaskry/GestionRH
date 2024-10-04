import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
//import cookieParser from 'cookie-parser';
//import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
//app.use(cookieParser());

// Define your DataSource configuration
const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // You can set this to false in production
  logging: false,
  entities: ['./entities/*.js'], // Adjust path based on your project structure
});

// Initialize DataSource and start the server
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to MySQL Database');
   // app.use('/api', authRoutes);

    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch(error => console.log('Database connection error:', error));
