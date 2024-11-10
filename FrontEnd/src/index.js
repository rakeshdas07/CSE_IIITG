import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import { AuthProvider } from './context/authContext'; // Import AuthProvider for authentication context

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App /> {/* Wrap App with AuthProvider to provide auth context */}
    </AuthProvider>
  </React.StrictMode>
);
