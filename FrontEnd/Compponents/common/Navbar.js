import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Hostel Mess Management</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/student/dashboard">Student Dashboard</Link></li>
        <li><Link to="/admin/meal-plan">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
