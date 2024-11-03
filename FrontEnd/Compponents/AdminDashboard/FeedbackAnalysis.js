// src/components/AdminDashboard/FeedbackAnalysis.js
import React, { useEffect, useState } from 'react';
import { getFeedbackAnalysis } from '../../services/api';

const FeedbackAnalysis = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchFeedbackAnalysis = async () => {
      try {
        const data = await getFeedbackAnalysis();
        setFeedbackData(data);
      } catch (err) {
        setError('Failed to fetch feedback analysis');
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbackAnalysis();
  }, []);

  if (loading) return <p>Loading feedback analysis...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Feedback Analysis</h2>
      <ul>
        {feedbackData.length > 0 ? (
          feedbackData.map((feedback, index) => (
            <li key={index}>
              <strong>{feedback.date}:</strong> {feedback.comment} - Rating: {feedback.rating}
            </li>
          ))
        ) : (
          <p>No feedback data available.</p>
        )}
      </ul>
    </div>
  );
};

export default FeedbackAnalysis;
