import { useState } from "react";
import { auth, googleProvider, fireStore } from "../../firebase/fireBase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

import "./SignIn.scss";
import Input from "../form input/Input";
import Button from "../custom button/Button";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // Google Sign-In Handler
  const googleSignInHandler = async () => {
    try {
      googleProvider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Reference to Firestore user document
      const userRef = doc(fireStore, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          createdAt: new Date(),
        });
        console.log("New user added to Firestore:", user);
      } else {
        console.log("User already exists in Firestore:", userSnap.data());
      }
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      console.log("User signed in:", user);

      // Reference to Firestore user document
      const userRef = doc(fireStore, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        console.log("User data retrieved from Firestore:", userSnap.data());
      } else {
        console.log("No user data found in Firestore.");
      }

      // Reset form after successful login
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="sign-in">
      <h2 className="text-3xl font-bold">I already have an account</h2>
      <span className="text-md title">Sign in with email and password</span>

      <form onSubmit={onSubmitHandler}>
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
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSignInHandler} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
