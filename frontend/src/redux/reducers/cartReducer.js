import { ActionTypes } from "../constants/action-types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM:
      const item = action.payload;

      console.log(item)

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case ActionTypes.CART_REMOVE_ITEM:
        return {
            ...state,
            cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
        }

    default:
      return state;
  }
};
