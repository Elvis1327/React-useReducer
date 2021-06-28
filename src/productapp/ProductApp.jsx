import React, { useReducer } from 'react';
import { initialProductState, productReducer } from '../reducers/productRducer';
import { types } from '../types';

export const ProductApp = () => {

       console.log('Probando')
    
    const [productState, dispatch] = useReducer(productReducer, initialProductState);
    const { products, cart, activeProduct } = productState;
    

    return (
        <>
        <h1>Products</h1>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.title}

                <button onClick={() => dispatch({
                    type: types.productShow,
                    payLoad: product
                })}>
                    Show
                </button>

                <button onClick={ () => dispatch({
                    type: types.productAddToCart,
                    payLoad: product
                }) }>
                    Add to cart
                </button>

            </li>
            ))}
        </ul>

        <h1>Cart</h1>
        <ul>
            {cart.map(product => (
                <li key={product.id}>
                    {product.title} - Quantity: {product.quantity}

                <button onClick={ () => dispatch({
                    type: types.productRemoveFromCart,
                    payLoad: product.id
                }) }>
                    Remove from cart
                </button>

            </li>
            ))}
        </ul>

        <h2>Preview</h2>
        <p>{activeProduct.title}</p>
        </>
    )
}



