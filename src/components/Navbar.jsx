import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger menu
import '../style/Navbar.css'; // CSS file for styling
import logo from '../../public/images/logo.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMobile(false); // Close mobile menu after a link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li className={activeLink === "home" ? "active" : ""}>
            <a href="#home" onClick={() => handleNavClick("home")}>Vacancies</a>
          </li>
          <li className={activeLink === "aboutus" ? "active" : ""}>
            <a href="#aboutus" onClick={() => handleNavClick("aboutus")}>About Us</a>
          </li>
        </ul>
      </div>

      <div className={isMobile ? "contact-button-mobile" : "contact-button"}>
        <button>Contact Us</button>
      </div>

      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
