import mongoose from 'mongoose';


const CartSchema = new mongoose.Schema({
    userId: {
        type: string,
        required: true,
    },
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, { timestamps: true })


const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart
