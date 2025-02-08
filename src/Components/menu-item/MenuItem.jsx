import { useNavigate } from "react-router-dom";

import {
  BgImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubTitle,
  Title,
} from "./MenuItemStyled";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(linkUrl);
  };
  return (
    <MenuItemContainer size={size} onClick={onNavigateHandler}>
      <BgImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <ContentContainer>
        <Title>{title?.toUpperCase()}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
