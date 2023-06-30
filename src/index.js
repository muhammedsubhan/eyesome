import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./Pages/UserAuthContext/UserAuthContext";
import { WishListContextProvider } from "./Pages/WishListContext/WishListContext";
import { ProductsContextProvider } from "./Pages/ProductsContext/ProductsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <WishListContextProvider>
          <ProductsContextProvider>
            <App />
          </ProductsContextProvider>
        </WishListContextProvider>
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
