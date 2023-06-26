import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Header from "./Components/header/Header";
import StartShopping from "./Pages/StartShopping/StartShopping";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/start-shopping" element={<StartShopping />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
