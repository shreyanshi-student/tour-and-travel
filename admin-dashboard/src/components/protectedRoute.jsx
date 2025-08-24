import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, token } = useSelector((state) => state.user);

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
