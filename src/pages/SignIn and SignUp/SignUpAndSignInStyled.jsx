import styled from 'styled-components'

// Breakpoints
const mobile = '@media screen and (max-width: 768px)';
const tablet = '@media screen and (max-width: 1024px)';

export const SignInAndSignUpContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-around;
  margin: 30px auto;

  ${tablet} {
    width: 85%;
    gap: 30px;
    flex-direction: row;
  }

  ${mobile} {
    width: 90%;
    margin: 70px 0 0 0;
    flex-direction: column;  // Stack vertically on mobile
    align-items: center;     // Center align children for better spacing
    gap: 100px;               // Add gap between sign-in and sign-up sections
  }
`;
