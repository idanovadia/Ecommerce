const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        products : [
            {
                productId: { type: String, required: true},
                quantity: { type: Number, default: 1, required: true },
                size: { type: String, required: true},
                color: { type: String, required: true},
                price: { type: Number, default: 1, required: true },
            },
        ],
        summery : {
            total:{ type: Number, required: true },
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart",CartSchema);