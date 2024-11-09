// src/components/AdminDashboard/AttendanceReport.js
import React, { useEffect, useState } from 'react';
import { getAttendanceReport } from '../../services/api';

const AttendanceReport = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchAttendanceReport = async () => {
      try {
        const data = await getAttendanceReport(); // Fetch attendance report data
        setAttendance(data); // Set the retrieved attendance data
      } catch (err) {
        setError(err.message || 'Failed to fetch attendance report'); // Display detailed error message
      } finally {
        setLoading(false); // Stop loading state
      }
    };
    fetchAttendanceReport();
  }, []);

  if (loading) return <p>Loading attendance report...</p>;
  if (error) return <p className="error-message">{error}</p>; // Display error message

  return (
    <div>
      <h2>Attendance Report</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length > 0 ? (
            attendance.map((record, index) => (
              <tr key={index}>
                <td>{record.student}</td>
                <td>{record.daysAttended}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No attendance records found.</td> {/* Display message for empty records */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReport;
