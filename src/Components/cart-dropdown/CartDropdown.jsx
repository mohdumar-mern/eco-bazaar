import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Button from "../custom button/Button";
import CartItem from "../cart-item/CartItem";
import { totalCartItems } from "../../features/cart/CartSlice";

import "./CartDropdown.scss";

const CartDropdown = () => {
  // ✅ Memoize cartItems to avoid unnecessary computations
  const cartItems = useSelector(totalCartItems);

  // ✅ Memoize mapped cart items to prevent re-renders if cartItems doesn't change
  const renderedCartItems = useMemo(() => {
    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ));
  }, [cartItems]);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? renderedCartItems : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default React.memo(CartDropdown); // ✅ Prevent unnecessary re-renders if props don't change
 