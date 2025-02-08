import { useState } from "react";
import { auth, fireStore } from "../../firebase/fireBase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpContainer, TitleHeading, TitleText } from "./SignUpStyled";

import Input from "../form input/Input";
import Button from "../custom button/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!displayName || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      // Save user in Firestore
      await setDoc(doc(fireStore, "users", user.uid), {
        uid: user.uid,
        name: displayName,
        email,
        createdAt: new Date(),
      });

      alert("User created and stored in Firestore:", user);

      // Reset form
      setFormData({ displayName: "", email: "", password: "", confirmPassword: "" });

    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <SignUpContainer>
      <TitleHeading>I do not have an account</TitleHeading>
      <TitleText>Sign Up with your email and password</TitleText>
      <form  onSubmit={onSubmitHandler}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
          handleChange={handleChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
