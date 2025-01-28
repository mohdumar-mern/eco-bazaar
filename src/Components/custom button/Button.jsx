
import "./Button.scss";
const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button `} onClick={otherProps.onClick} type={otherProps.type}>
      {children}
    </button>
  );
};

export default Button;
