import React from 'react';

const FeedbackAnalysis = ({ feedbackData }) => {
  return (
    <div className="dashboard-section">
      <h2>Feedback Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.studentId}</td>
              <td>{feedback.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackAnalysis;