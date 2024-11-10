import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Registration from './components/StudentDashboard/Registration';
import Login from './components/StudentDashboard/Login';
import AdminLogin from './components/AdminDashboard/AdminLogin';
import PaymentStatus from './components/StudentDashboard/PaymentStatus';
import NoticeBoard from './components/StudentDashboard/NoticeBoard';
import Calendar from './components/StudentDashboard/Calendar';
import Menu from './components/StudentDashboard/Menu';
import FeedbackForm from './components/StudentDashboard/FeedbackForm';
import Timings from './components/StudentDashboard/Timings';
import MealPlan from './components/AdminDashboard/MealPlan';
import AttendanceReport from './components/AdminDashboard/AttendanceReport';
import BillingHistory from './components/AdminDashboard/BillingHistory';
import ReportAnalytics from './components/AdminDashboard/ReportAnalytics';
import FeedbackAnalysis from './components/AdminDashboard/FeedbackAnalysis';
import PrivateRoute from './components/common/PrivateRoute';
import HomePage from './components/HomePage/HomePage';
import StudentDashboard from './components/StudentDashboard/studentdashboard';  // Corrected import (capitalized 'S')
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login/student" element={<Login />} />
            <Route path="/login/admin" element={<AdminLogin />} />

            {/* Student Dashboard Routes */}
            <Route path="/student-dashboard" element={<PrivateRoute><StudentDashboard /></PrivateRoute>} />
            <Route path="/payment-status" element={<PrivateRoute><PaymentStatus /></PrivateRoute>} />
            <Route path="/notice-board" element={<PrivateRoute><NoticeBoard /></PrivateRoute>} />
            <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
            <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
            <Route path="/feedback" element={<PrivateRoute><FeedbackForm /></PrivateRoute>} />
            <Route path="/timings" element={<PrivateRoute><Timings /></PrivateRoute>} />

            {/* Admin Dashboard Routes */}
            <Route path="/admin-dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
            <Route path="/admin/meal-plan" element={<PrivateRoute><MealPlan /></PrivateRoute>} />
            <Route path="/admin/attendance" element={<PrivateRoute><AttendanceReport /></PrivateRoute>} />
            <Route path="/admin/billing-history" element={<PrivateRoute><BillingHistory /></PrivateRoute>} />
            <Route path="/admin/reports" element={<PrivateRoute><ReportAnalytics /></PrivateRoute>} />
            <Route path="/admin/feedback-analysis" element={<PrivateRoute><FeedbackAnalysis /></PrivateRoute>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;