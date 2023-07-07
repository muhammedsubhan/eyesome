import React from "react";
import Header from "./Components/header/Header";
import StartShopping from "./Pages/StartShopping/StartShopping";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import ProtectedRoutes from "./Pages/ProtectedRoutes/ProtectedRoutes";
import WishList from "./Pages/WishList/WishList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";
const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/start-shopping" element={<StartShopping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
