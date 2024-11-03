import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styles for the calendar
// import './Calendar.css'; // Optional: import custom styles if you have any

const StudentCalendar = () => {
  const [date, setDate] = useState(new Date()); // State to manage selected date

  const handleDateChange = (newDate) => {
    setDate(newDate); // Update selected date
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        // Additional props can be added here if needed
      />
      <p>Selected date: {date.toDateString()}</p> {/* Display selected date */}
    </div>
  );
};

export default StudentCalendar; // Ensure the filename matches this export
