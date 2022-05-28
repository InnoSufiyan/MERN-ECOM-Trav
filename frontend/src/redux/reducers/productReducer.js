import { ActionTypes } from "../constants/action-types"

export const productListReducer = (state = { loading: true, products: [] }, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCT_LIST_SUCCESS:
            return {
                loading: false, products: action.payload
            }
        default:
            return state

    }
}

export const productDetailsReducer = (state = { loading: true, product: { review: [] } }, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false, product: action.payload
            }
        default:
            return state
    }
}