import styled from 'styled-components'
import { CiShoppingCart } from 'react-icons/ci';

export const CartIconContainer = styled.div`
     width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const ItemCountContainer = styled.span`
  position: absolute;
      font-size: 10px;
      margin-bottom: 2px;
      font-weight: bold;
      bottom: 12px;
`;

export const ShoppingCartIcon = styled(CiShoppingCart)`
      width: 30px;
      height: 30px;
`