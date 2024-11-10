import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [successMessage, setSuccessMessage] = useState('');

  // Retrieve success message from sessionStorage on component mount
  useEffect(() => {
    const message = sessionStorage.getItem('successMessage');
    if (message) {
      setSuccessMessage(message);
      sessionStorage.removeItem('successMessage'); // Clear the message after showing it
    }
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Hostel Mess Management</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Add Image from Public Folder */}
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/hp.png`} alt="Welcome to Hostel Mess" className="welcome-image" />
      </div>
    </div>
  );
};

export default HomePage;