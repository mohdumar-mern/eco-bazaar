import styled from 'styled-components'

// Breakpoint for mobile
const mobile = '@media screen and (max-width: 768px)';

export const SignInContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;

  ${mobile} {
    width: 100%;          // Take full width on mobile
    padding: 0 15px;      // Add some side padding for spacing
  }
`;

export const TitleHeading = styled.h2`
  font-size: 32px;
  font-weight: bold;

  ${mobile} {
    font-size: 28px;      // Slightly smaller on mobile for better fit
  }
`;

export const TitleText = styled.span`
  margin: 10px 0;
  font-size: 18px;

  ${mobile} {
    font-size: 16px;      // Adjust font size for mobile readability
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile} {
    gap: 10px;               // Add spacing between buttons
  }
`;
