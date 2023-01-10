import express from 'express';
import { verifyUser, verifyAdmin, verifyToken } from '../utils/verifyToken.js';
import Cart from '../models/Cart.js';

const router = express.Router();


router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save();

        res.status(200).json(savedCart)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


router.patch('/:id', verifyToken, async (req, res) => {
    try {

        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            });

        res.status(200).json(updatedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});




router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json('Cart has been deleted!');
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/find/:userId', verifyToken, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });

        res.status(200).json(cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/', verifyAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    }
    catch (err) {
        res.status(500).json(err)

    }
})


export default router;