import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productDetailsReducer, productListReducer } from "./productReducer";

const reducers = combineReducers({
    productList: productListReducer,
    productDetail: productDetailsReducer,
    cart: cartReducer
});

export default reducers;