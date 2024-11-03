import React, { useState } from 'react';
import { useAuthContext } from '../../context/authContext'; // Use the custom hook
import { loginUser } from '../../services/api'; // Ensure you have a loginUser function in your API service
import './Login.css'; // Import CSS for styling (if exists)

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useAuthContext(); // Use custom hook to access the auth context
  const [error, setError] = useState(''); // State to store error messages
  const [success, setSuccess] = useState(''); // State to store success messages

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before submission
    setSuccess(''); // Reset success state before submission

    try {
      const userData = await loginUser(credentials); // Call your login API function
      login(userData); // Call the login function from context with the user data
      setSuccess('Login successful!'); // Set success message
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.'); // Set error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required // Add required attribute for validation
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required // Add required attribute for validation
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {success && <p className="success-message">{success}</p>} {/* Display success message */}
    </div>
  );
};

export default Login;
