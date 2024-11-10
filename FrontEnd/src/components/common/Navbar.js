import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleOptionClick = (path) => {
    setShowModal(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/iiitg.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-logo">
          Indian Institute of Information Technology, Guwahati
        </Link>
      </div>
      <ul className="navbar-links">
        {location.pathname === '/' && (
          <>
            <li><Link to="/register">Register</Link></li>
            <li>
              <button onClick={toggleModal} className="login-button">Login</button>
            </li>
          </>
        )}
      </ul>

      {showModal && (
        <div className="modal-background" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => handleOptionClick('/login/student')}>Student</button>
            <button onClick={() => handleOptionClick('/login/admin')}>Admin</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
