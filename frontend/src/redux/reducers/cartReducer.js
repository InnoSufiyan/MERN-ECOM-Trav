import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case ActionTypes.CART_ADD_ITEM:
            const item = action.payload
            
        default: 
        return state
    }

}