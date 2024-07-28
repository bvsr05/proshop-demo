import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

import productRoutes from './routes/productRoutes.js';
//import userRoutes from './routes/userRoutes.js';
//import orderRoutes from './routes/orderRoutes.js';
//import uploadRoutes from './routes/uploadRoutes.js';

//import path from 'path';
//import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';





const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) =>{    res.send("API is running");    });
app.use( '/api/products', productRoutes );



app.use(notFound);
app.use(errorHandler);

app.listen( port, () => console.log( `Server is running on port ${port}` ) );