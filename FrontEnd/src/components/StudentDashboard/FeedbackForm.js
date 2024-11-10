import React, { useState } from 'react';
import { submitFeedback } from '../../services/api';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ message: '', rating: 1 });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(false); // Success state

  const handleChange = (e) => setFeedback({ ...feedback, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.message) {
      setError('Feedback message cannot be empty.'); // Validate message
      return;
    }
    if (feedback.rating < 1 || feedback.rating > 5) {
      setError('Rating must be between 1 and 5.'); // Validate rating
      return;
    }
    setLoading(true); // Set loading to true while submitting
    try {
      await submitFeedback(feedback);
      setSuccess(true); // Set success state on successful submission
      setFeedback({ message: '', rating: 1 }); // Reset form fields
    } catch (err) {
      setError('Failed to submit feedback. Please try again.'); // Handle errors
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="message"
        placeholder="Feedback"
        value={feedback.message}
        onChange={handleChange}
        required // Make textarea required
      />
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        value={feedback.rating}
        onChange={handleChange}
        required // Make rating input required
      />
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      {success && <p className="success">Feedback submitted successfully!</p>} {/* Success message */}
    </form>
  );
};

export default FeedbackForm;