import { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignUpAndSignIn from "./pages/SignIn and SignUp/SignUpAndSignIn";
import Header from "./Components/header/Header";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";

import { setCurrentUser, selectCurrentUser } from "./features/user/UserSlice";

import { auth, fireStore } from "./firebase/fireBase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  // Memoized function to handle user authentication state changes
  const handleAuthStateChange = useCallback(
    async (user) => {
      if (user) {
        const userRef = doc(fireStore, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          let userData = userSnap.data();

          // ✅ Convert Firestore Timestamp to serializable format
          if (userData.createdAt?.toDate) {
            userData = {
              ...userData,
              createdAt: userData.createdAt.toDate().toISOString(),
            };
          }

          // Dispatch only if user data changes
          if (JSON.stringify(currentUser) !== JSON.stringify(userData)) {
            dispatch(setCurrentUser(userData));
          }
        } else {
          console.log("User does not exist in Firestore.");
          dispatch(setCurrentUser(null));
        }
      } else {
        dispatch(setCurrentUser(null));
        console.log("No user signed in.");
      }
    },
    [dispatch, currentUser] // Avoid redundant dispatches if currentUser is unchanged
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
    return () => unsubscribe();
  }, [handleAuthStateChange]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* ✅ Nested Routing for ShopPage */}
        <Route path="/shop/*" element={<ShopPage />}>
        </Route>

        <Route path="/checkout" element={<CheckoutPage />} />
        <Route 
          path="/signin" 
          element={currentUser ? <Navigate to="/" replace /> : <SignUpAndSignIn />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
