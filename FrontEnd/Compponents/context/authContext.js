import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(false); // Set loading to false after checking user
  }, []);

  const login = (userData) => {
    try {
      setUser(userData); // Set the user state with user data
      localStorage.setItem('user', JSON.stringify(userData)); // Persist user in localStorage
    } catch (error) {
      console.error("Failed to save user data:", error); // Handle errors
    }
  };

  const logout = () => {
    setUser(null); // Reset user state to null
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  const value = {
    user,
    login,
    logout,
    loading, // Include loading state
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Prevent rendering children until loading is complete */}
    </AuthContext.Provider>
  );
};
