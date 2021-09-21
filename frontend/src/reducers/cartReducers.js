import { CART_REMOVE_ITEM, CART_SUPPORT_PROJECT } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_SUPPORT_PROJECT:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.project === item.project)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.project === existItem.project ? item : x
                    ),
                };
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                };
            };
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x =>
                    x.project !== action.payload
                ),
            };
        default:
            return state;
    }
}