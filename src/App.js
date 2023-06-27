import React from "react";
import Header from "./Components/header/Header";
import StartShopping from "./Pages/StartShopping/StartShopping";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import ProtectedRoutes from "./Pages/ProtectedRoutes/ProtectedRoutes";
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
        </Routes>
      </div>
    </>
  );
};

export default App;
