import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        shipmentAddress: " ",
    },
    reducers:{
        addProduct: (state,action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        addShipmentAddress: (state,action) => {
            state.shipmentAddress = action.payload;
        },
        paymentSucceed: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        },
    },
});

export const { addProduct, addShipmentAddress, paymentSucceed } = cartSlice.actions;
export default cartSlice.reducer;
