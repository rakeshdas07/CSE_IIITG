import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import Calendar from './Calendar';
import NoticeBoard from './NoticeBoard'; // Import the updated NoticeBoard component
import './studentdashboard.css';

const StudentDashboard = () => {
  const { user, logout } = useAuthContext(); // Get the user context and logout function
  const navigate = useNavigate();

  const [notices, setNotices] = useState([]);
  const [mealType, setMealType] = useState('veg'); // State for the selected meal type

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if no user is found
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate('/'); // Redirect to home page after logout
  };

  const handleMealChange = (event) => {
    setMealType(event.target.value); // Update the meal type based on the selected radio button
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <div className="left-column">
          {/* Calendar Section */}
          <div className="dashboard-section calendar-section">
            <h4>Calendar</h4>
            <Calendar /> {/* Render the calendar component */}
          </div>
        </div>

        <div className="center-column">
          {/* Menu Section with Payment Options */}
          <div className="dashboard-section menu-section">
            <h3>Today's Menu</h3>
            <p>
                <ul>
                    <li>Breakfast (7:30 am - 9:00 am):  Sandwich</li> 
                    <br />
                    <li>Lunch (12:00 pm - 2:00 pm): Pasta</li>
                    <br />
                    <li>Dinner (7:30 pm - 9:00 pm): Salad</li>
                </ul>
            </p>
            
            {/* Payment Section Inside Today's Menu */}
            <div className="payment-section">
              <h4>Payment</h4>
              <p>Mess fee status: Pending</p>

              {/* Separate Payment Buttons for Veg and Non-Veg Meals */}
              <div className="payment-options">
                <button className="payment-button">Pay for Veg Meal</button>
                <button className="payment-button">Pay for Non-Veg Meal</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          {/* Feedback Form Section */}
          <div className="dashboard-section feedback-form">
            <h4>Feedback</h4>
            <form>
              <textarea placeholder="Enter your feedback here..." rows="4" cols="30"></textarea>
              <button type="submit">Submit Feedback</button>
            </form>
          </div>

          {/* Notice Board Section Below Feedback Form */}
          <div className="dashboard-section notice-board">
            <NoticeBoard notices={notices} /> {/* Pass fetched notices data to the NoticeBoard component */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
