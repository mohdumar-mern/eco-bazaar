import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../cart-item/CartItem";
import { totalCartItems, hideCart } from "../../features/cart/CartSlice";
import {
  ButtonContainer,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./CartDropdownStyled";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Memoize cartItems to avoid unnecessary computations
  const cartItems = useSelector(totalCartItems);

  // Memoize rendered cart items to avoid unnecessary re-mapping
  const renderedCartItems = useMemo(() => {
    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ));
  }, [cartItems]); // Only recompute if cartItems change

  // Memoize the 'GO TO CHECKOUT' click handler to avoid re-creating it on every render
  const handleCheckoutClick = () => {
    dispatch(hideCart()); // Dispatch to hide cart after navigating
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          renderedCartItems
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <ButtonContainer onClick={handleCheckoutClick}>
        GO TO CHECKOUT
      </ButtonContainer>
    </CartDropdownContainer>
  );
};

// Memoize CartDropdown to prevent unnecessary re-renders
export default React.memo(CartDropdown);
