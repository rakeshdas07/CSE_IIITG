import React from 'react';

const MealPlan = ({ mealData }) => {
  return (
    <div className="dashboard-section">
      <h2>Meal Plan</h2>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Available</th>
            <th>Served</th>
          </tr>
        </thead>
        <tbody>
          {mealData.map((meal, index) => (
            <tr key={index}>
              <td>{meal.meal}</td>
              <td>{meal.available}</td>
              <td>{meal.served}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealPlan;