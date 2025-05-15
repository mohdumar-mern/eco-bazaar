import styled from 'styled-components'

// Breakpoints
const mobile = '@media screen and (max-width: 768px)';
const tablet = '@media screen and (max-width: 1024px)';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  ${tablet} {
    width: 75%;
  }

  ${mobile} {
    width: 90%;
    margin: 30px auto 0;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  ${mobile} {
    font-size: 12px;
    padding: 8px 0;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  ${mobile} {
    width: 22%;
    font-size: 12px;

    &:last-child {
      width: 10%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  ${mobile} {
    font-size: 24px;
  }
`;
