import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    color: orange; /* Change this to your theme color */
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  margin-left: 70px;
  border: 2px solid rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const ImageContainer = styled.img`
  height: 60px;
  width: 60px;
  mix-blend-mode: screen; /* Improves background removal */
  background: transparent; /* Ensures image background is transparent */
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;


  @media screen and (max-width: 768px) {
    width: 100vw;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
