import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartShow } from "../../features/cart/CartSlice";
import { totalQuantites } from "../../features/cart/CartSlice";
import { CiShoppingCart } from "react-icons/ci";

import "./CartIcon.scss";

const CartIcon = () => {
  const totalQuantity = useSelector(totalQuantites)
  const dispatch = useDispatch()
  const toggleCart = () =>{
    dispatch(toggleCartShow())
  }
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <CiShoppingCart className="shopping-icon" /> 
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
