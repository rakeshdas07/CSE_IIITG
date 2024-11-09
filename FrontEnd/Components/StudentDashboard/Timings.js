// src/components/StudentDashboard/Timings.js
import React from 'react';
import './Timings.css'; // Import the CSS file for styling

const Timings = () => (
  <div className="timings">
    <h2>Meal Timings</h2>
    <p><strong>Breakfast:</strong> 7:00 - 9:00 AM</p>
    <p><strong>Lunch:</strong> 12:00 - 2:00 PM</p>
    <p><strong>Dinner:</strong> 7:00 - 9:00 PM</p>
    <p className="note">Please ensure to adhere to the timings for your convenience.</p>
  </div>
);

export default Timings;
