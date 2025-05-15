import styled, { css } from "styled-components";

// Responsive breakpoints
const mobile = '@media screen and (max-width: 768px)';
const tablet = '@media screen and (max-width: 1024px)';

// Shared span width for desktop
const span = css`
  width: 23%;

  ${mobile} {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  ${mobile} {
    
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  ${mobile} {
    width: 80%;
    padding-right: 10px;
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameContainer = styled.span`
  ${span}
`;

export const QuantityContainer = styled.span`
  display: flex;
  align-items: center;
  ${span}
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  font-weight: bold;
`;

export const ValueContainer = styled.span`
  margin: 0 10px;
`;

export const PriceContainer = styled.span`
  ${span}
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  font-weight: bold;

  ${mobile} {
    padding-left: 0;
    margin-top: 10px;
  }
`;
