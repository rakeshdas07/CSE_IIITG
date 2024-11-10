// src/components/AdminDashboard/ReportAnalytics.js
import React, { useEffect, useState } from 'react';
import { getReportAnalytics } from '../../services/api';

const ReportAnalytics = () => {
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchReportAnalytics = async () => {
      try {
        const data = await getReportAnalytics();
        setReportData(data);
      } catch (err) {
        setError('Failed to fetch report analytics');
      } finally {
        setLoading(false);
      }
    };
    fetchReportAnalytics();
  }, []);

  if (loading) return <p>Loading report analytics...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Report and Analytics</h2>
      <ul>
        {reportData.length > 0 ? (
          reportData.map((report, index) => (
            <li key={index}>
              <strong>{report.category}:</strong> {report.value}
            </li>
          ))
        ) : (
          <p>No report data available.</p>
        )}
      </ul>
    </div>
  );
};

export default ReportAnalytics;