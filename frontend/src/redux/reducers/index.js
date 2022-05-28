import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducer";

const reducers = combineReducers({
    productList: productListReducer,
    productDetail: productDetailsReducer
});

export default reducers;