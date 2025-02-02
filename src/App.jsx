import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
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

          dispatch(setCurrentUser(userData));
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
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignUpAndSignIn />}
        />
      </Routes>
    </Router>
  );
}

export default App;
