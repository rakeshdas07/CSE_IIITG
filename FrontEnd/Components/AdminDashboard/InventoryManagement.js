// src/components/AdminDashboard/InventoryManagement.js
import React, { useEffect, useState } from 'react';
import { getInventory, updateInventory } from '../../services/api';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getInventory();
        setInventory(data);
      } catch (err) {
        setError('Failed to fetch inventory');
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedInventory = [...inventory];
    updatedInventory[index].quantity = newQuantity;
    setInventory(updatedInventory);
  };

  const handleUpdate = async () => {
    try {
      await updateInventory(inventory);
      alert('Inventory updated successfully!');
    } catch (err) {
      setError('Failed to update inventory');
    }
  };

  if (loading) return <p>Loading inventory...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Inventory Management</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name}: 
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} 
            />
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Update Inventory</button>
    </div>
  );
};

export default InventoryManagement;
