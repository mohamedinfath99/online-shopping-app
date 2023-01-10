import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "Title is must"],
        unique : true
    },
    desc: {
        type: String,
        required : true
    },
    img: {
        type: String,
        required : [true, "Image is must"]
    },
    categories: {
        type: Array
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number,
        required : [true, "Price must"],
    }
}, {timestamps: true} );


const Product = mongoose.model('Product', ProductSchema);

export default Product;
