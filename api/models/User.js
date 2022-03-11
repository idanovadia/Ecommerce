const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, unique: false},
        lastName: { type: String, required: true, unique: false},
        username: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        city: { type: String, required: true},
        street: { type: String, required: true},
        isAdmin: {
            type: Boolean,
            default: false,
        },
        img: { 
            type: String,
            default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User",UserSchema);