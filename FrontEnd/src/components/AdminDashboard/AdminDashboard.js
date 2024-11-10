import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import MealPlan from './MealPlan';
import AttendanceReport from './AttendanceReport';
import BillingHistory from './BillingHistory';
import FeedbackAnalysis from './FeedbackAnalysis';
import './admindashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();  // Initialize useNavigate for redirection

  // Static data for illustration
  const mealData = [
    { meal: 'Breakfast', available: 100, served: 90 },
    { meal: 'Lunch', available: 100, served: 95 },
    { meal: 'Dinner', available: 100, served: 80 }
  ];

  const attendanceData = [
    { studentId: 'S001', status: 'Present' },
    { studentId: 'S002', status: 'Absent' },
    { studentId: 'S003', status: 'Present' }
  ];

  const billingData = [
    { studentId: 'S001', amount: 500, status: 'Paid' },
    { studentId: 'S002', amount: 600, status: 'Pending' },
    { studentId: 'S003', amount: 700, status: 'Paid' }
  ];

  const feedbackData = [
    { studentId: 'S001', feedback: 'Good' },
    { studentId: 'S002', feedback: 'Average' },
    { studentId: 'S003', feedback: 'Excellent' }
  ];

  // Logout handler
  const handleLogout = () => {
    // Perform any logout-related tasks like clearing tokens, user info, etc.

    // Redirect to homepage
    navigate('/');
  };

  return (
    <div className="admin-dashboard-container">
      <header className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="dashboard-sections">
        <MealPlan mealData={mealData} />
        <AttendanceReport attendanceData={attendanceData} />
        <BillingHistory billingData={billingData} />
        <FeedbackAnalysis feedbackData={feedbackData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
