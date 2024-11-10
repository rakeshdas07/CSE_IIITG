import React from 'react';
import './NoticeBoard.css'; // Import the styles for NoticeBoard

const NoticeBoard = ({ notices }) => {
  return (
    <div className="notice-board-container">
      <div className="notice-board-header">
        <h2>Notice Board</h2>
      </div>

      <div className="notice-board-content">
        {notices.length > 0 ? (
          notices.map((notice) => (
            <div key={notice.id} className="notice-item">
              <h4>{notice.title}</h4>
              <p>{notice.content}</p>
            </div>
          ))
        ) : (
          <p>No notices available.</p>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;