import React, { useEffect, useState } from 'react';
import { getMenu } from '../../services/api';

const Menu = () => {
  const [menu, setMenu] = useState({ today: [], tomorrow: [], week: [] });
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu();
        setMenu(data);
      } catch (err) {
        setError('Failed to fetch menu.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };
    fetchMenu();
  }, []);

  // Function to render menu items
  const renderMenuItems = (items) => {
    return items.length > 0 ? (
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    ) : (
      <p>No menu available.</p>
    );
  };

  return (
    <div>
      <h2>Menu</h2>
      {loading && <p>Loading menu...</p>} {/* Loading message */}
      {error && <p>{error}</p>} {/* Error message */}
      <h3>Today's Menu</h3>
      {renderMenuItems(menu.today)}
      <h3>Tomorrow's Menu</h3>
      {renderMenuItems(menu.tomorrow)}
      <h3>This Week's Menu</h3>
      {renderMenuItems(menu.week)}
    </div>
  );
};

export default Menu;
