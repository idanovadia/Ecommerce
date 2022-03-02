const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Cart = require("../models/Cart");
const router = require("express").Router();

router.post("/",verifyToken,async(req, res) => {
    const newCart = new Cart(req.body);
    try{
        const savedCart = await newCart.save();
        res.status(201).json({});
    } catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new : true }
        );
        res.status(200).json({});
    } catch (err){
        res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAuthorization, async (req , res ) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/find/:userId", verifyTokenAndAuthorization, async (req , res ) => {
    try{
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/",verifyTokenAndAdmin, async (req , res) => {
    try{
        const carts = await Cart.find();
        res.status(200).send(carts);
    } catch(err){
        res.send(500).send(err);
    }
})

module.exports = router;