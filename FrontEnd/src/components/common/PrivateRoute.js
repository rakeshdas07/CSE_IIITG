import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext'; // Ensure this path matches your auth context

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext(); // Check the `user` value from the AuthContext

  return user ? children : <Navigate to="/login" />; // Redirect to login if user is not authenticated
};

export default PrivateRoute;
