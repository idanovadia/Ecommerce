const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Order = require("../models/Order");
const {getOrders} = require("../factuality/order");

const router = require("express").Router();

router.post("/",verifyToken,async(req, res) => {
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new : true }
        );
        res.status(200);
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
        const orders = getOrders(req.params.userId,req.query.type);
        res.status(200).json(orders);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/",verifyTokenAndAdmin, async (req , res) => {
    try{
        const orders = await Order.find();
        res.status(200).send(orders);
    } catch(err){
        res.send(500).send(err);
    }
});

router.get("/income" , verifyTokenAndAdmin, async(req, res) => {
    const productId = req.query.pid;
    const data = new Date();
    const lastMonth = new Date(date.setMonth(date.geMonth()-1));
    const priviosMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));

    try{
        const income = await Order.aggregate([
            { $match: 
                {   createdAt: { $gte : priviosMonth},
                    ...(productId && {
                        products: { $elemMatch: {productId} },
                    }),
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt"},
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"},
                },
            },
        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = router;