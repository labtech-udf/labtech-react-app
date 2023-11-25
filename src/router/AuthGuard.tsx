import React, { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
