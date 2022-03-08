const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product");
const router = require("express").Router();

router.post("/",async(req, res) => {
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(201).json({});
    } catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try{
        const updatedProduct = await Product.findByIdAndUpdate(
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
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/find/:id", async (req , res ) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/search/:searchValue", async (req , res ) => {
    try{
        // const products = await Product.find({"desc" : /^req.params.searchValue$/i});
        const products = await Product.find({"desc" : {
            $regex : new RegExp(req.params.searchValue,"i")}});
        console.log(products);
        res.status(200).json(products);
    } catch (err){
        res.status(500).json(err);
    }
});

const getNewProducts = async() => {
    return await Product.find().sort({ createdAt: -1 }).limit(5);
};

const getProductsByCategories = async (qCategories) => {
    return await Product.find({
        categories: {
            $in: [qCategories]
        },
    });
};

const getAllProducts = async () => {
    return await Product.find();
};

const getProductByQueries = async (queries) => {
    try{
        const { qNew , category } = queries;
        if(qNew) return await getNewProducts();
        if(category) return await getProductsByCategories(category);
        return await getAllProducts();
    }catch(err){
        console.log(err);
    }
};

router.get("/", async (req , res ) => {
    try{
        res.status(200).json(await getProductByQueries(req.query));
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;