import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Registration.css';

const Registration = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    rollno: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    // Validate fields, etc.

    // Assuming registration is successful
    setSuccess('Registration Successful!');

    // Redirect to the homepage after successful registration
    setTimeout(() => {
      navigate('/');  // Navigate to the homepage after 2 seconds
    }, 2000);
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Student Registration</h2>
        {success && <div className="success-message">{success}</div>}
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>

        <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="rollno"
            placeholder="Roll Number"
            value={userData.rollno}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
