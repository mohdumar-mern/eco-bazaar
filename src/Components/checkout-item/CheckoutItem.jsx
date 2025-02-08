import { useDispatch } from "react-redux";

import {
  increaseItemInCart,
  decreaseItemToCart,
  removeItemFromCart,
} from "../../features/cart/CartSlice";
import {
  ArrowContainer,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  NameContainer,
  PriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ValueContainer,
} from "./CheckoutItemStyled";

const CheckoutItem = ({
  cartItem: { id, name, quantity, price, imageUrl },
}) => {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increaseItemInCart(id)); // Increase the quantity of the item
  };

  const decreaseHandler = () => {
    if (quantity > 1) {
      dispatch(decreaseItemToCart(id)); // Decrease the quantity of the item
    }
  };

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(id)); // Remove the item completely
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={decreaseHandler}>&#60;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={increaseHandler}>&#62;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={removeItemHandler}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
