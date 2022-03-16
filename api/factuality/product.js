const Product = require("../models/Product");

const getAllPrices = async(prodsIds) => {
    return await Product.find({}, {price: 1}).where('_id').in(prodsIds);
};

const getOrderByID = async(productId) => {
    return await Product.findById(productId);
}

const getOrdersByListOfIDs = async(ids) =>{
    const l = await Product.find({_id: {$in: ids}});
    return l;
}

const getProductsIdFromProductsList = async (orders) => {
    const set = new Set();
    orders.
        map(order => order._doc.products.
            map(product=>set.add(product._doc._id.toString())));
    return set;
}

exports.getAllPrices = getAllPrices;
exports.getOrderByID = getOrderByID;
exports.getOrdersByListOfIDs = getOrdersByListOfIDs;
exports.getProductsIdFromProductsList = getProductsIdFromProductsList;
