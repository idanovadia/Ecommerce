import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "searchProducts",
    initialState: {
        searchInputValue: "",
        products: [],
        filters: {},
        sort: "newest",
    },
    reducers:{
        initSearch: (state,action) => {
            state.searchInputValue = action.payload;
        },
        addProducts: (state,action) => {
            state.products = action.payload;
        },
        addFillters: (state,action) => {
            state.filters = action.payload;
        },
        addSortVal: (state,action) => {
            state.sort = action.payload;
        },
        
    },
});

export const { initSearch, addProducts, addFillters, addSortVal } = searchSlice.actions;
export default searchSlice.reducer;