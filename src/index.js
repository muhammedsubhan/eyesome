import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./Pages/UserAuthContext/UserAuthContext";
import { WishListContextProvider } from "./Pages/WishListContext/WishListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <WishListContextProvider>
          <App />
        </WishListContextProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
