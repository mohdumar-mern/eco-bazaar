import { useDispatch, useSelector } from "react-redux";

import { toggleCartShow } from "../../features/cart/CartSlice";
import { totalQuantities } from "../../features/cart/CartSlice";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingCartIcon,
} from "./CartIconStyled";

const CartIcon = () => {
  const totalQuantity = useSelector(totalQuantities);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggleCartShow());
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingCartIcon />
      <ItemCountContainer>{totalQuantity}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
