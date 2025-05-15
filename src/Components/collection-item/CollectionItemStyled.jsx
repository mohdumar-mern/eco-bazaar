import styled from "styled-components";
import Button from "../custom button/Button";

// ✅ Responsive breakpoints
const mobile = "@media screen and (max-width: 768px)";
const tablet = "@media screen and (max-width: 1024px)";

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${mobile} {
    height: 100%;
  }
`;

export const ButtonContainer = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${mobile} {
    top: auto;
    bottom: 40px; // ✅ place at bottom instead of fixed top
    width: 90%;
    font-size: 14px;
    padding: 8px 12px; // ✅ reduce padding
  }
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
      border: 2px solid orange;
    }

    ${ButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }

  ${tablet} {
    width: 30vw;
  }

  ${mobile} {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;

    &:hover {
      ${ButtonContainer} {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  ${mobile} {
    font-size: 16px;
  }
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;

  ${mobile} {
    width: 85%;
    font-size: 14px;
  }
`;

export const PriceContainer = styled.span`
  width: 10%;

  ${mobile} {
    font-size: 14px;
  }
`;
