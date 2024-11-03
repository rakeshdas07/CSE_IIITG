import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hostel Mess Management. All rights reserved.</p>
      <p>Contact us at <a href="mailto:hostel@university.com">hostel@university.com</a></p>
    </footer>
  );
};

export default Footer;
