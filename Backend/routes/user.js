import express from 'express';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';
import User from '../models/User.js';

const router = express.Router();


router.patch('/:id', verifyUser, async (req, res) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            });

        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/:id', verifyUser, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json('User has been deleted!');
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/find/:id', verifyAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password, ...others } = user._doc

        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/', verifyAdmin, async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
});



export default router;