const Cart = require("../models/Cart");
const { getAllPrices } = require("./product");

const getIds = (products) => {
    let prodsIds = [];
    products.forEach(element => { prodsIds.push(element._id) });
    return prodsIds;
}

const getPrices = async (products) => {
    var dict = {};
    const prodsIds = getIds(products);
    const t = await getAllPrices(prodsIds);
    t.map((priceElm) => (
        dict[priceElm._doc._id.toString()] = priceElm._doc.price
    ));
    return dict;
};

const getTotal = (prices) => {
    return Object.values(prices).reduce((partialSum, a) => partialSum + a);
};

const generateCart = (cartDetails,prices) => {
    let total = 0;
    const product = cartDetails.products.map((product) => {
        total += prices[product._id] * product.quantity;
        return {...product , productId: product._id, price : prices[product._id] * product.quantity}
    });

    return cart = {
        userId: cartDetails.userId,
        products: product,
        summery: {
            total,
        }
    };

}

const createMyCart = async (cartDetails) => {
    const prices = await getPrices(cartDetails.products);
    // const total = await getTotal(prices);
    const cart = generateCart(cartDetails,prices);
    return new Cart(cart);  
};

exports.createMyCart = createMyCart;