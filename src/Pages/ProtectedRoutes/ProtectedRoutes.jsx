import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
