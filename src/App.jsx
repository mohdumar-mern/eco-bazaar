import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./Components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
