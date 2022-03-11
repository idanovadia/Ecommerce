const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        products : [
            {
                _id: { type: String, required: true},
                quantity: { type: Number, default: 1, required: true },
                size: { type: String, required: true},
                color: { type: String, required: true},
                price: { type: Number, default: 1, required: true },
            },
        ],
        summery : {
            total:{ type: Number, required: true },
            address: { type: String, required: true },
            status: { type: String, default: "pending"}, 
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Order",OrderSchema);