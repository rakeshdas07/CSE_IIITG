import React, { useState } from 'react';
import './calendar.css'; // Ensure you have custom styling for the calendar

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // State for the current month and year
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to generate the calendar based on current month and year
  const generateCalendar = () => {
    const currentMonth = currentDate.getMonth(); // Get the current month (0-11)
    const currentYear = currentDate.getFullYear(); // Get the current year

    // Get the first day of the month (0 = Sunday, 6 = Saturday)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Get the number of days in the current month
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create an array with empty slots before the 1st day of the month
    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null); // Empty slots before the first day
    }

    // Fill the calendar with actual dates
    for (let i = 1; i <= totalDaysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Get the month name and year
  const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  // Calendar days
  const calendarDays = generateCalendar();

  // Functions to navigate between months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      {/* Month and Year Header */}
      <div className="calendar-header">
        <div className="calendar-month-year">
          <button className="prev-btn" onClick={goToPreviousMonth}>Prev</button>
          <span className="month">{currentMonthName}</span>
          <span className="year">{currentYear}</span>
          <button className="next-btn" onClick={goToNextMonth}>Next</button>
        </div>
      </div>

      {/* Weekdays Header */}
      <div className="calendar-day-header">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Body */}
      <div className="calendar-body">
        {calendarDays.map((day, index) => (
          <div key={index} className={`calendar-cell ${day ? '' : 'empty'}`}>
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;