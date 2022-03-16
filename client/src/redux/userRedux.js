import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser : null,
        isFetching : false,
        error : false,
    },
    reducers:{
        loginStart: (state) => { state.isFetching = true },
        loginSuccess: (state,action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.isFetching = false;
            state.currentUser = null;
        },
        logoutFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updateLatestOrder: (state,action) => {
            if(state.currentUser?.latestOrders?.length === 3 ){
                state.currentUser.latestOrders.splice(2, 1)
            }
            state.currentUser?.latestOrders?.unshift(action.payload);
            // state.currentUser && state.currentUser.latestOrders
            // && state.currentUser.latestOrders.length === 3 
            //     ? state.currentUser.latestOrders.splice(2, 1)
            //     : null;
            // state.currentUser.latestOrders.unshift(action.payload); 
        },
    },
});

export const { 
    loginStart, loginSuccess, loginFailure,
    logout, logoutFailure,updateLatestOrder
} = userSlice.actions;
export default userSlice.reducer;
