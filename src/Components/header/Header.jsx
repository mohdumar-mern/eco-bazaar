import { useSelector } from "react-redux";

import { auth } from "../../firebase/fireBase";
import { selectCurrentUser } from "../../features/user/UserSlice";
import { showCart } from "../../features/cart/CartSlice";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import logo from "../../assets/logo.png";

import {
  HeaderContainer,
  ImageContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./HeaderStyled";
const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const show = useSelector(showCart);

  return (
    <HeaderContainer>
      <LogoContainer to={"/"}>
        <ImageContainer src={logo} alt="ECO BAZAAR" title="Eco Bazaar" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {show && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
