import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseItemInCart, decreaseItemToCart, removeItemFromCart } from '../../features/cart/CartSlice'

import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem: { id, name, quantity, price, imageUrl } }) => {
    const dispatch = useDispatch()

    const increaseHandler = () => {
        dispatch(increaseItemInCart(id)); // Increase the quantity of the item
    }

    const decreaseHandler = () => {
        if(quantity > 1) {
        dispatch(decreaseItemToCart(id)); // Decrease the quantity of the item
    }
}

    const removeItemHandler = () => {
        dispatch(removeItemFromCart(id)); // Remove the item completely
    }

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseHandler}>&#60;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={increaseHandler}>&#62;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={removeItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
