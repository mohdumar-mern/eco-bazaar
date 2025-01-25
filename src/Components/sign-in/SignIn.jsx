import { useState } from "react";

import "./SignIn.scss";
import Input from "../form input/Input";
import Button from "../custom button/Button";
const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(signIn);
    setSignIn({
      email: "",
      password: "",
    });
  }

  return (
    <div className="sign-in">
      <h2 className="text-3xl font-bold">I already have an account</h2>
      <span className="text-md title">Sign in with email and password</span>

      <form action="" onSubmit={onSubmitHandler}>
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

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
