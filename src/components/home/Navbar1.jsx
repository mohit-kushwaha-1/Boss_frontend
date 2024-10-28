import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../style/home/Navbar1.css";
import logo from '../../../public/images/logo.png'
import {Link} from 'react-router-dom';


const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState({
    clients: false,
    candidates: false,
  });

  const handleNavClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close mobile menu after a link click
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  // <Route path="/vac" element={<Vacancis />}></Route>
  //       <Route path="/details" element={<Details />} />
  //       <Route path="/" element={<Home />} />
  //       <Route path="/candidate" element={<Candidate />} />
  //       <Route path="/candidate1" element={<CandidatePage1 />} />
  //       <Route path="/candidate-star" element={<StartMain />} />
  //       <Route path="/candidate-ExamCv" element={<ExampleCv />} />
  //       <Route path="/client-procesure" element={<Procesure />} />

  return (
    <header className="navbar1">
      <div className="navbar-container1">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>

        <div className="nav-space">
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="/vac"
              className={`nav-link ${
                activeLink === "vacancies" ? "active" : ""
              }`}
              onClick={() => handleNavClick("vacancies")}
            >
              Vacancies
            </Link>

            {/* Candidates Dropdown */}
            <div
              className="nav-link dropdown"
              onClick={() => toggleDropdown("candidates")}
            >
              <Link
                to="#"
                className={`nav-link ${
                  activeLink === "candidates" ? "active" : ""
                }`}
                onClick={() => handleNavClick("candidates")}
              >
                Candidates
              </Link>
              {dropdownOpen.candidates && (
                <div className="dropdown-content">
                  <Link to="/candidate">Job Application Process</Link>
                  <Link to="/candidate1">Job Application Tips</Link>
                  <Link to="/candidate-star">STAR-Method</Link>
                  <Link to="/candidate-ExamCv">Example CV</Link>
                </div>
              )}
            </div>

            
            <div
              className="nav-link dropdown"
              onClick={() => toggleDropdown("clients")}
            >
              <Link
                to="#clients"
                className={`nav-link ${
                  activeLink === "clients" ? "active" : ""
                }`}
                onClick={() => handleNavClick("clients")}
              >
                Clients
              </Link>
              {dropdownOpen.clients && (
                <div className="dropdown-content">
                  <Link to="/client-procesure">The Procedure</Link>
                  <Link to="/client-services">Our Services</Link>
                  <Link to="#sourcing">Sourcing Talent</Link>
                </div>
              )}
            </div>

            <Link
              to="#about"
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </Link>
          </nav>
          <button className="contact-btn desktop">Contact Us</button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="menu-icon mobile" onClick={handleMenuClick}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <a
              href="#home"
              className={`mobile-nav-link ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </a>
            <a
              href="#vacancies"
              className={`mobile-nav-link ${
                activeLink === "vacancies" ? "active" : ""
              }`}
              onClick={() => handleNavClick("vacancies")}
            >
              Vacancies
            </a>

            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("candidates")}
            >
              Candidates
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.candidates ? "block" : "none" }}
              >
                <a href="#apply" onClick={() => setMenuOpen(false)}>
                  Apply Now
                </a>
                <a href="#opportunities" onClick={() => setMenuOpen(false)}>
                  Opportunities
                </a>
              </div>
            </div>

            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("clients")}
            >
              Clients
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.clients ? "block" : "none" }}
              >
                <a href="#procedure" onClick={() => setMenuOpen(false)}>
                  The Procedure
                </a>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Our Services
                </a>
                <a href="#sourcing" onClick={() => setMenuOpen(false)}>
                  Sourcing Talent
                </a>
              </div>
            </div>

            {/* <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("clients")}
            >
              Clients
              {dropdownOpen.clients && (
                <div className="dropdown-content mobile">
                  <a href="#procedure" onClick={() => setMenuOpen(false)}>
                    The Procedure
                  </a>
                  <a href="#services" onClick={() => setMenuOpen(false)}>
                    Our Services
                  </a>
                  <a href="#sourcing" onClick={() => setMenuOpen(false)}>
                    Sourcing Talent
                  </a>
                </div>
              )}
            </div> */}

            <a
              href="#about"
              className={`mobile-nav-link ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </a>
            <button className="contact-btn mobile">Contact Us</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar1;