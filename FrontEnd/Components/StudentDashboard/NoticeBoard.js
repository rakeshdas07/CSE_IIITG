import React, { useEffect, useState } from 'react';
import { getNotices } from '../../services/api';
import './NoticeBoard.css'; // Import CSS for styling (if exists)

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNotices();
        setNotices(data);
      } catch (err) {
        setError('Failed to fetch notices. Please try again later.'); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="notice-board">
      <h2>Notice Board</h2>
      {loading && <p>Loading notices...</p>} {/* Display loading state */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <ul>
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <li key={index}>{notice.message}</li>
          ))
        ) : (
          <p>No notices available.</p> // Message when no notices are found
        )}
      </ul>
    </div>
  );
};

export default NoticeBoard;
