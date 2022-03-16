const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {getOrders} = require("../factuality/order");


router.post("/register", async (req,res) => {
    const userVal = req.body.values;
    const newUser = new User({
        firstName:userVal.firstName,
        lastName:userVal.lastName,
        username:userVal.username,
        email:userVal.email,
        password: CryptoJS.AES.encrypt(userVal.password,process.env.PASS_SEC),
        city:userVal.city,
        street:userVal.street,
        img:userVal.img,
    });

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});


router.post("/login", async(req,res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials!");
    
        const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    
        OriginalPassword !== req.body.password &&
          res.status(401).json("Wrong credentials!");
    
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          {expiresIn:"3d"}
        );
        const { password, ...others } = user._doc;
        const latestOrders = await getOrders(others._id, "latest");
        res.status(200).json({...others, accessToken, latestOrders});
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
})

module.exports = router;