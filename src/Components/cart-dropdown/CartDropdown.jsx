import React from 'react'
import {useSelector} from 'react-redux'
import Button from '../custom button/Button'


import './CartDropdown.scss'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
   const {cartItems} = useSelector( state => state.cart)
   console.log("cartItems is ", cartItems)

  return (
    <div className='cart-dropdown' >
        <div className="cart-items" >
          {
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          }
        </div>
        <Button >GO TO CHECKOUT</Button>
      
    </div>
  )
}

export default CartDropdown
