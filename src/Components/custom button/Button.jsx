import { ButtonContainer } from "./ButtonStyled";

const Button = ({children, ...props}) => {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
