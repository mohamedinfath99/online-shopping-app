import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String,
        required : [true, "Username is must"],
        unique : true,
        maxlength: [40, 'Username must have less or equal then 40 characters'],
        minlength: [5, 'Username must have less or equal then 5 characters'],
    },
    email: {
        type: String,
        required : [true, "Email is must"],
        unique : true,
    },
    password: {
        type: String,
        required : [true, "Password is must"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true} );


const User = mongoose.model('User', UserSchema)


export default User;
