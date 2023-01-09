import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';


const app = express();

dotenv.config();
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(cookieParser())


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


app.listen(5000, () => {
    connect()
    console.log("Backend server is running!");
});











































































// const express = require("express");
// const cors = require("cors");
// const cookieParser = require('cookie-parser')
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");




// const app = express();


// dotenv.config();
// mongoose.set('strictQuery', true)


// mongoose
// .connect(process.env.MONGO_URL)
// .then(() => console.log("DB Connection Successfull!"))
// .catch((err) => {
//   console.log(err);
// });


// app.use(cookieParser())
// app.use(cors());
// app.use(express.json());


// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);



// app.listen(process.env.PORT || 5000, () => {
//   console.log("Backend server is running!");
// });