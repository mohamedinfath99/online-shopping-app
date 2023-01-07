import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    title: {
        type: string,
        required : [true, "Title is must"],
        unique : true,
    },
    desc: {
        type: string,
        required : true,
    },
    img: {
        type: string,
        required : [true, "Image is must"],
    },
    categories: {
        type: {type: Array}
    },
    size: {
        type: string
    },
    color: {
        type: string
    },
    price: {
        type: Number,
        required : [true, "Price must"],
    }
}, {timestamps: true} )


const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
