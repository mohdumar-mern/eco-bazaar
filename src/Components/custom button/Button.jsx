import "./Button.scss";
const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? "google-sign-in" : ""} custom-button `}
      onClick={otherProps.onClick}
      type={otherProps.type}
    >
      {children}
    </button>
  );
};

export default Button;
