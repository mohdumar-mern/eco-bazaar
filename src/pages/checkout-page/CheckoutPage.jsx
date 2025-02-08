import { useSelector } from "react-redux";

import { totalCartItems, totalPrice } from "../../features/cart/CartSlice";
import CheckoutItem from "../../Components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../Components/stripe-button/StripeButton";
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./CheckoutPageStyled";

const CheckoutPage = () => {
  const cartItems = useSelector(totalCartItems);
  const total = useSelector(totalPrice);
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Discription</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantitiy</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>Total: ${total}</span>

        <StripeCheckoutButton price={total} />
      </TotalContainer>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
