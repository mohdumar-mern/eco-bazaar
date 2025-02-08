import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../features/cart/CartSlice";
import {
  ButtonContainer,
  CollectionFooterContainer,
  CollectionItemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
} from "./CollectionItemStyled";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addToCartHandler = useCallback(() => {
    dispatch(addItemToCart(item));
  }, [dispatch, item]);
  return (
    <CollectionItemContainer key={id}>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <ButtonContainer inverted onClick={() => addToCartHandler(item)}>
        ADD TO CART
      </ButtonContainer>
    </CollectionItemContainer>
  );
};

export default React.memo(CollectionItem);
