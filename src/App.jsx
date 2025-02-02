import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignUpAndSignIn from "./pages/SignIn and SignUp/SignUpAndSignIn";
import Header from "./Components/header/Header";
import { setCurrentUser } from "./features/user/UserSlice";

import { auth, fireStore } from "./firebase/fireBase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(fireStore, "users", user.uid);
        const userSnap = await getDoc(userRef);
  
        if (userSnap.exists()) {
          let userData = userSnap.data();
  
          // ✅ Convert Firestore Timestamp to serializable format
          if (userData.createdAt && userData.createdAt.toDate) {
            userData = {
              ...userData,
              createdAt: userData.createdAt.toDate().toISOString(), // Convert to string format
            };
          }
  
          dispatch(setCurrentUser(userData));
          // console.log("User fetched from Firestore:", userData);
        } else {
          console.log("User does not exist in Firestore.");
          dispatch(setCurrentUser(null));
        }
      } else {
        dispatch(setCurrentUser(null));
        console.log("No user signed in.");
      }
    });
  
    return () => unsubscribe();
  }, [dispatch]);
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignUpAndSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
