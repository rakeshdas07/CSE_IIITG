// src/components/AdminDashboard.js
import { Routes, Route } from 'react-router-dom';
import MealPlan from './AdminDashboard/MealPlan'; // Adjusted import path
import AttendanceReport from './AdminDashboard/AttendanceReport'; // Adjusted import path
import BillingHistory from './AdminDashboard/BillingHistory'; // Adjusted import path
import FeedbackAnalysis from './AdminDashboard/FeedbackAnalysis'; // Adjusted import path
import InventoryManagement from './AdminDashboard/InventoryManagement'; // Adjusted import path
import ReportAnalytics from './AdminDashboard/ReportAnalytics'; // Adjusted import path

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Routes>
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/attendance-report" element={<AttendanceReport />} />
        <Route path="/billing-history" element={<BillingHistory />} />
        <Route path="/feedback-analysis" element={<FeedbackAnalysis />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/report-analytics" element={<ReportAnalytics />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
};

export default AdminDashboard;
