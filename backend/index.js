import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './Routes/userRoute.js';
import authRoutes from './Routes/authRoute.js';

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=> {console.log('MongoDB is connected')}).catch((err)=>{});

const app = express();

app.use(express.json());


app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!');
});

app.use('/blog/user', userRoutes);
app.use('/blog/auth', authRoutes);

app.use ((err, req, res, next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});