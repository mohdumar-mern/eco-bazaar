import React,{useCallback} from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../features/cart/CartSlice";
import "./CollectionItem.scss";
import Button from "../custom button/Button";
const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addToCartHandler = useCallback(() => {
    dispatch(addItemToCart(item));
  }, [dispatch, item]);
  return (
    <div className="collection-item" key={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => addToCartHandler(item)}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default React.memo(CollectionItem);
