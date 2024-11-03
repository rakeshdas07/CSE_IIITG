// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Registration from './components/StudentDashboard/Registration';
import Login from './components/StudentDashboard/Login';
import PaymentStatus from './components/StudentDashboard/PaymentStatus';
import NoticeBoard from './components/StudentDashboard/NoticeBoard';
import Calendar from './components/StudentDashboard/Calendar';
import Menu from './components/StudentDashboard/Menu';
import FeedbackForm from './components/StudentDashboard/FeedbackForm';
import Timings from './components/StudentDashboard/Timings';
import MealPlan from './components/AdminDashboard/MealPlan';
import AttendanceReport from './components/AdminDashboard/AttendanceReport';
import InventoryManagement from './components/AdminDashboard/InventoryManagement';
import BillingHistory from './components/AdminDashboard/BillingHistory';
import ReportAnalytics from './components/AdminDashboard/ReportAnalytics';
import FeedbackAnalysis from './components/AdminDashboard/FeedbackAnalysis';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/timings" element={<Timings />} />
          <Route path="/admin/meal-plan" element={<PrivateRoute><MealPlan /></PrivateRoute>} />
          <Route path="/admin/attendance" element={<PrivateRoute><AttendanceReport /></PrivateRoute>} />
          <Route path="/admin/inventory" element={<PrivateRoute><InventoryManagement /></PrivateRoute>} />
          <Route path="/admin/billing-history" element={<PrivateRoute><BillingHistory /></PrivateRoute>} />
          <Route path="/admin/reports" element={<PrivateRoute><ReportAnalytics /></PrivateRoute>} />
          <Route path="/admin/feedback-analysis" element={<PrivateRoute><FeedbackAnalysis /></PrivateRoute>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
