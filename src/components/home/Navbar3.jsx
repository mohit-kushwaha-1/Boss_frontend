import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../style/home/Navbar1.css";
import logo from '../../../public/images/logo.png'
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("candidates");
  const [dropdownOpen, setDropdownOpen] = useState({
    clients: false,
    candidates: false,
    about:false,
  });

  const navigate = useNavigate()

  const handleContact = ()=>{
    navigate('/about-contact')
  }

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
                to="#"
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
                  <Link to="/client-sourcing">Sourcing Talent</Link>
                </div>
              )}
            </div>


            <div
              className="nav-link dropdown"
              onClick={() => toggleDropdown("about")}
            >
              <Link
                to="#"
                className={`nav-link ${
                  activeLink === "about" ? "active" : ""
                }`}
                onClick={() => handleNavClick("about")}
              >
                About Us
              </Link>
              {dropdownOpen.about && (
                <div className="dropdown-content">
                  <Link to="/about-working">Working at BOSS Recruitment</Link>
                  <Link to="/about-privacy">Privacy Statement</Link>
                  <Link to="/about-contact">Contact Us</Link>
                  <Link to="/about-direction">Direction</Link>
                </div>
              )}
            </div>

            {/* <Link
              to="#about"
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </Link> */}
          </nav>
          <button className="contact-btn desktop" onClick={handleContact}>Contact Us</button>
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
            <Link
              to="/"
              className={`mobile-nav-link ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="/vac"
              className={`mobile-nav-link ${
                activeLink === "vacancies" ? "active" : ""
              }`}
              onClick={() => handleNavClick("vacancies")}
            >
              Vacancies
            </Link>

            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("candidates")}
            >
              Candidates


              {/* <div className="dropdown-content">
                  <Link to="/candidate">Job Application Process</Link>
                  <Link to="/candidate1">Job Application Tips</Link>
                  <Link to="/candidate-star">STAR-Method</Link>
                  <Link to="/candidate-ExamCv">Example CV</Link>
                </div> */}
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.candidates ? "block" : "none" }}
              >
                <Link to="/candidate" onClick={() => setMenuOpen(false)}>
                Job Application Process
                </Link>
                <Link to="/candidate1" onClick={() => setMenuOpen(false)}>
                Job Application Tips
                </Link>

                <Link to="/candidate-star" onClick={() => setMenuOpen(false)}>
                STAR-Method
                </Link>

                <Link to="/candidate-ExamCv" onClick={() => setMenuOpen(false)}>
                Example CV
                </Link>
              </div>
            </div>

            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("clients")}
            >
              Clients
              {/* <Link to="/client-procesure">The Procedure</Link>
                  <Link to="/client-services">Our Services</Link>
                  <Link to="#sourcing">Sourcing Talent</Link> */}
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.clients ? "block" : "none" }}
              >
                <Link to="/client-procesure" onClick={() => setMenuOpen(false)}>
                  The Procedure
                </Link>
                <Link to="/client-services" onClick={() => setMenuOpen(false)}>
                  Our Services
                </Link>
                <Link to="/client-sourcing" onClick={() => setMenuOpen(false)}>
                  Sourcing Talent
                </Link>
              </div>
            </div>



            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              {/* <Link to="/client-procesure">The Procedure</Link>
                  <Link to="/client-services">Our Services</Link>
                  <Link to="#sourcing">Sourcing Talent</Link> */}
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.about ? "block" : "none" }}
              >
                <Link to="/about-working" onClick={() => setMenuOpen(false)}>
                Working at BOSS Recruitment
                </Link>
                <Link to="/about-privacy" onClick={() => setMenuOpen(false)}>
                Privacy Statement
                </Link>
                <Link to="/about-contact" onClick={() => setMenuOpen(false)}>
                Contact Us
                </Link>

                <Link to="/about-direction" onClick={() => setMenuOpen(false)}>
                Direction
                </Link>
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

            {/* <Link
              href="#about"
              className={`mobile-nav-link ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              About Us
            </Link> */}
            <button className="contact-btn mobile" onClick={handleContact}>Contact Us</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar3;