import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer,
} from "./CartItemStyled";

const CartItem = ({ item: { price, imageUrl, name, quantity } }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>
          {quantity} x ${price}
        </PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
