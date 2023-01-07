import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username: {
        type: string,
        required : [true, "Username is must"],
        unique : true,
        maxlength: [40, 'A username must have less or equal then 40 characters'],
        minlength: [10, 'A username must have less or equal then 5 characters'],
    },
    email: {
        type: string,
        required : [true, "Email is must"],
        unique : true,
    },
    password: {
        type: string,
        required : [true, "Password is must"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true} )


const User = mongoose.model('User', UserSchema)

module.exports = User
