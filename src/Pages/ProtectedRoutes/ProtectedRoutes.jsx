import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext/UserAuthContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = useUserAuth();

  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
