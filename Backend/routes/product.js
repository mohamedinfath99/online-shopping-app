import express from 'express';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';
import Product from '../models/Product.js';

const router = express.Router();


router.post('/', verifyAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try{
        const savedProduct = await newProduct.save();

        res.status(200).json(savedProduct)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


router.patch('/:id', verifyAdmin, async (req, res) => {
    try {

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            });

        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }
});




router.delete('/:id', verifyAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json('Product has been deleted!');
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;

        if(qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(1)
        }
        else if (qCategory) {
            products = await Product.find({categories: {
                $in: [qCategory]
            }})
        }
        else {
            products = await Product.find()
        }
        
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


export default router;