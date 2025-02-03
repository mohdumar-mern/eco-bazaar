import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartShow } from "../../features/cart/CartSlice";

import { CiShoppingCart } from "react-icons/ci";

import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch()
  const toggleCart = () =>{
    dispatch(toggleCartShow())
  }
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <CiShoppingCart className="shopping-icon" /> 
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
