import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignUpAndSignIn from "./pages/SignIn and SignUp/SignUpAndSignIn";

import Header from "./Components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignUpAndSignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
