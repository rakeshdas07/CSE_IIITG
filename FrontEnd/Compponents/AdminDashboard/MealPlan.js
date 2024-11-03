// src/components/AdminDashboard/MealPlan.js
import React, { useState, useEffect } from 'react';
import { getMealPlan, updateMealPlan, deleteMealPlan } from '../../services/api';

const MealPlan = () => {
  const [mealPlan, setMealPlan] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchMealPlan = async () => {
      try {
        const data = await getMealPlan();
        setMealPlan(data);
      } catch (err) {
        setError('Failed to fetch meal plan');
      } finally {
        setLoading(false);
      }
    };
    fetchMealPlan();
  }, []);

  const handleSave = async () => {
    try {
      await updateMealPlan(mealPlan);
      alert('Meal plan updated successfully!'); // Simple feedback
    } catch (err) {
      setError('Failed to update meal plan');
    }
  };

  const handleChange = (index, value) => {
    const updatedPlan = [...mealPlan];
    updatedPlan[index].menu = value; // Update the menu for the specific day
    setMealPlan(updatedPlan);
  };

  const handleDelete = async (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this meal plan?');
    if (confirmDelete) {
      try {
        await deleteMealPlan(mealPlan[index].id); // Assuming each meal has a unique ID
        const updatedPlan = mealPlan.filter((_, i) => i !== index); // Remove the deleted meal from the list
        setMealPlan(updatedPlan);
        alert('Meal plan deleted successfully!');
      } catch (err) {
        setError('Failed to delete meal plan');
      }
    }
  };

  if (loading) return <p>Loading meal plan...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Meal Plan Management</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Menu</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mealPlan.map((meal, index) => (
            <tr key={index}>
              <td>{meal.day}</td>
              <td>
                <input
                  type="text"
                  value={meal.menu}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default MealPlan;
