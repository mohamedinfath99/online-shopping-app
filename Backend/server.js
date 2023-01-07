import app from './app.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', true);



const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)


const connect = async () => {
    try {
        await mongoose.connect(DB);
        console.log("Database is connected!");
    } 
    catch (error) {
        throw(error);
    }
}



mongoose.connection.on("Disconnected", () => {
    console.log("MongoDB is Disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB is connected");
});



const port = 5000
app.listen(port, () => {
    connect()
    console.log("Backend server is running!");
})