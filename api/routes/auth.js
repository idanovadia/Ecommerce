const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req,res) => {

    const newUser = new User({
        firstName:req.body.values.firstName,
        lastName:req.body.values.lastName,
        username:req.body.values.username,
        email:req.body.values.email,
        password: CryptoJS.AES.encrypt(req.body.values.password,process.env.PASS_SEC),
        img:req.body.values.img
    });

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.send(500).json(err);
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

        res.status(200).json({...others, accessToken});
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
})

module.exports = router;