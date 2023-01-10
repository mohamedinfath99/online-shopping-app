import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import productRoute from './routes/product.js';
import cartRoute from './routes/cart.js';
import stripeRoute from './routes/stripe.js'
import orderRoute from './routes/order.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app = express();

dotenv.config();
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(cookieParser())
app.use(cors())


const DB = process.env.MONGODB_URL.replace(
    '<PASSWORD>',
    process.env.MONGODB_PASSWORD
);


const connect = async () => {
    try {
        await mongoose.connect(DB);
        console.log("database is connected!");
    } 
    catch (err) {
        throw(err);
    }
};



mongoose.connection.on("Disconnected", () => {
    console.log("MongoDb is Disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected");
});


app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/carts', cartRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/checkout', stripeRoute);


app.listen(5000, () => {
    connect()
    console.log("Backend server is running!");
});