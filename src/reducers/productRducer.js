import { types } from "../types";

export const initialProductState = {
    products: [
        {id: 1, title: 'Product #1'},
        {id: 2, title: 'Product #2'},
    ],
    cart: [
        { id: 1, title: 'Product #1', quantity: 1}
    ],
    activeProduct: {id: 2, title: 'Product #2'}
}


export const productReducer = (state, action) => {
    switch (action.type) {
        case types.productShow:
            return {
                ...state,
                activeProduct: action.payLoad
            };
            
        case types.productAddToCart:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {...action.payLoad, quantity: 1}
                ]
            };

        case types.productRemoveFromCart:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payLoad)
            }
        default:
            return state;
    }
}



