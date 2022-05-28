import axios from "axios";
import { ActionTypes } from "../constants/action-types";


export const listProducts = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/products')

        dispatch({
            type: ActionTypes.PRODUCT_LIST_SUCCESS,
            payload: res?.data,
        });
    } catch (error) {

    }
}

export const detailProduct = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`)

        dispatch({
            type: ActionTypes.PRODUCT_DETAIL_SUCCESS,
            payload: res?.data,
        });
    } catch (error) {
        console.log(error)
    }
}