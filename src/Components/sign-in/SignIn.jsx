import { useState } from "react";
import { auth, googleProvider } from "../../firebase/fireBase";
import { signInWithPopup } from "firebase/auth";

import "./SignIn.scss";
import Input from "../form input/Input";
import Button from "../custom button/Button";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  // Google Sign-In Handler
  const googleSignInHandler = async () => {
    try {
      // Set custom parameters for Google Sign-In
      googleProvider.setCustomParameters({
        prompt: "select_account", // Ensures the account selection prompt appears
      });

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User info: ", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!signIn.email || !signIn.password) {
      console.error("Please enter both email and password.");
      return;
    }

    console.log("Sign in with email/password: ", signIn);
    setSignIn({
      email: "",
      password: "",
    });
  };

  return (
    <div className="sign-in">
      <h2 className="text-3xl font-bold">I already have an account</h2>
      <span className="text-md title">Sign in with email and password</span>

      <form onSubmit={onSubmitHandler}>
        <Input
          type="email"
          name="email"
          value={signIn.email}
          label={"Email"}
          required
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={signIn.password}
          label={"Password"}
          required
          handleChange={handleChange}
        />
<div className="buttons">
<Button type="submit">Sign In</Button>
        {/* Google Sign-In Button */}
        <Button type="button" onClick={googleSignInHandler} isGoogleSignIn>
          Sign In with Google
        </Button>
</div>
       
      </form>
    </div>
  );
};

export default SignIn;
