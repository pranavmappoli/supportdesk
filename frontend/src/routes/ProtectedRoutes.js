import React from "react";
import useAuthState from "../hooks/useAuthState";
import { Outlet, Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
function ProtectedRoutes() {
  const [logedIn, loading] = useAuthState();
  if (loading) {
    return <Spinner></Spinner>;
  }
  return logedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
