import styled from 'styled-components'

// Mobile breakpoint
const mobile = '@media screen and (max-width: 768px)';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px !important;

  ${mobile} {
    width: 100% !important;
    padding: 0 15px;
  }
`;

export const TitleHeading = styled.h2`
  font-size: 32px;
  font-weight: bold;

  ${mobile} {
    font-size: 28px;
  }
`;

export const TitleText = styled.span`
  margin: 10px 0;
  font-size: 18px;

  ${mobile} {
    font-size: 16px;
  }
`;

export const SignUpFormContainer = styled.form`
  /* Add styles if needed */
`;
