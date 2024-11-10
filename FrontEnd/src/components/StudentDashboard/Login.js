// src/components/StudentDashboard/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';  // Corrected path to authContext.js
import './Login.css';  // Correct path for the CSS file

const Login = () => {
  const [studentData, setStudentData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { login } = useAuthContext();  // Get the login function from AuthContext
  const navigate = useNavigate();  // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');  // Reset error message before submission
    setSuccess('');  // Reset success message before submission

    // Dummy data for student login
    const dummyData = {
      email: 'student@example.com',
      password: 'student123',
    };

    // Check login credentials against the dummy data
    if (studentData.email === dummyData.email && studentData.password === dummyData.password) {
      setSuccess('Login Successful!');
      login({ email: studentData.email });  // Update the user data in AuthContext
      navigate('/student-dashboard');  // Redirect to Student Dashboard
    } else {
      setError('INVALID EMAIL OR PASSWORD !');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Student Login</h2>
        {success && <div className="success-message">{success}</div>}
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={studentData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
