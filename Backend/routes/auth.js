import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const router = express.Router();


router.post('/register', async (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CJSPASSWORD).toString()
    });


    try{
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    }
    catch (err) {
        res.status(500).json(err)
    }
})



router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) return res.status(401).json('Wrong credentials!');

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CJSPASSWORD);

        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (OriginalPassword !== req.body.password) return res.status(401).json('Wrong credentials!');


        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWTPASSWORD);


        const {password, ...others} = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({...others})
    }
    catch (err) {
        res.status(500).json(err)
    }
})





export default router;























































// const router = require("express").Router();
// const User = require("../models/User");
// const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");

// //REGISTER
// router.post("/register", async (req, res) => {
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.CODE
//     ).toString(),
//   });

//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //LOGIN

// router.post('/login', async (req, res) => {
//     try{
//         const user = await User.findOne({ username: req.body.username});
//         if(!user) return res.status(401).json("Wrong User Name");

//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             process.env.CODE
//         );


//         const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//         const inputPassword = req.body.password;
        
//         originalPassword != inputPassword && res.status(401).json("Wrong Password");


        
//         const token = jwt.sign({ 
//           id: user._id, 
//           isAdmin: user.isAdmin 
//         }, process.env.JWTPASSWORD);
  
//         const { password, isAdmin, ...others } = user._doc

//         res.cookie("access_Token", token, { httpOnly: true }).status(200).json({...others})

//     }catch(err){
//         res.status(500).json(err);
//     }

// });

// module.exports = router;