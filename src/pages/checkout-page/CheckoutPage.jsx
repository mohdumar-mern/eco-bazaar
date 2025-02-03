import React from 'react'
import { useSelector } from 'react-redux'

import { totalCartItems, totalQuantities, totalPrice } from '../../features/cart/CartSlice'

import './CheckoutPage.scss'
import CheckoutItem from '../../Components/checkout-item/CheckoutItem'
 
const CheckoutPage = () => {
    const cartItems = useSelector(totalCartItems)
    const totalQuantity = useSelector(totalQuantities)
    const total = useSelector(totalPrice)
  return (
      <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Discription</span>
            </div>
            <div className="header-block">
                <span>Quantitiy</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
            
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total">
            <span>Total: ${total}</span>
        </div>
      </div>
  )
}

export default CheckoutPage
