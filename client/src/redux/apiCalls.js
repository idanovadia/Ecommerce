import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from "../requestMethods"
import { addShipmentAddress } from "./cartRedux";

export const login = async ( dispatch, user ) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        dispatch(addShipmentAddress(`${res.data.city}, ${res.data.street}`));
    }catch(err){
        dispatch(loginFailure());
    }
};

export const saveOrder = async (id,cart,shipmentsAddress) => {
    try{
        return await userRequest.post("/orders", 
            {
                userId: id,
                products: cart.products,
                summery: {
                    total: cart.total,
                    address: shipmentsAddress,
                    status: "done", 
                },
            },
        );
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
}