import React from 'react';
import './footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
