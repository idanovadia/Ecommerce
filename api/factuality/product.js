const Product = require("../models/Product");

const getAllPrices = async(prodsIds) => {
    return await Product.find({}, {price: 1}).where('_id').in(prodsIds);
};

exports.getAllPrices = getAllPrices;