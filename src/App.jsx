import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignUpAndSignIn from "./pages/SignIn and SignUp/SignUpAndSignIn";

import Header from "./Components/header/Header";

import { auth, fireStore } from "./firebase/fireBase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Set up an authentication state observer
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Reference to user document in Firestore
        const userRef = doc(fireStore, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setCurrentUser(userData); // Store user details in state
          console.log("User fetched from Firestore:", userData);
        } else {
          console.log("User does not exist in Firestore.");
          setCurrentUser(null);
        }
      } else {
        // User is signed out
        setCurrentUser(null);
        console.log("No user signed in.");
      }
    });

    // Cleanup the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignUpAndSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
