import React from 'react';

const AttendanceReport = ({ attendanceData }) => {
  return (
    <div className="dashboard-section">
      <h2>Attendance Report</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.studentId}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReport;