// src/components/common/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext'; // Ensure this path matches your auth context

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext(); // Assumes `useAuthContext` provides `isAuthenticated`

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
