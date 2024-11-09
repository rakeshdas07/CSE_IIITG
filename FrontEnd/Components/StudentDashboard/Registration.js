import React, { useState } from 'react';
import { registerUser } from '../../services/api'; // Ensure this function is defined in your api.js
import './Registration.css'; // Import CSS file for styling (if exists)

const Registration = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(''); // State to store error messages
  const [success, setSuccess] = useState(''); // State to store success messages

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before submission
    setSuccess(''); // Reset success state before submission

    try {
      await registerUser(formData); // Call the register function
      setSuccess('Registration successful!'); // Set success message
    } catch (err) {
      setError('Registration failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required // Add required attribute for validation
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required // Add required attribute for validation
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required // Add required attribute for validation
        />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {success && <p className="success-message">{success}</p>} {/* Display success message */}
    </div>
  );
};

export default Registration;
