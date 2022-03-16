const Order = require("../models/Order");
const { getOrdersByListOfIDs,getProductsIdFromProductsList } = require("../factuality/product");

const getOrders = async (userId, type) => {
    return type === "latest" 
    ? await Order.find({ userId }).sort({ updatedAt: -1 }).limit(3)
    : await Order.find({ userId }).sort({ updatedAt: -1 });
}

const addPropsToProductInOrder = async (latestOrders,productsInfo) => {
    const p = latestOrders.
        map(order => order._doc.products.
            map(product=> (
                product._doc.title = productsInfo[product._doc._id]
                )
            )
        )
}

exports.getOrders = getOrders;
