import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../style/home/Navbar1.css";
import logo from '../../../public/images/logo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar5 = () =>
{
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");
  const [dropdownOpen, setDropdownOpen] = useState({
    clients: false,
    candidates: false,
    about: false,
  });


  const navigate = useNavigate()

  const handleContact = () =>
  {
    navigate('/contact-us')
  }
  const handleNavClick = (link) =>
  {
    setActiveLink(link);
    setMenuOpen(false); // Close mobile menu after a link click
  };

  const handleMenuClick = () =>
  {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) =>
  {
    setDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  // <Route path="/vacancies" element={<Vacancis />}></Route>
  //       <Route path="/job-details" element={<Details />} />
  //       <Route path="/" element={<Home />} />
  //       <Route path="/job-application-process" element={<Candidate />} />
  //       <Route path="/job-application-tips" element={<CandidatePage1 />} />
  //       <Route path="/star-method" element={<StartMain />} />
  //       <Route path="/example-cv" element={<ExampleCv />} />
  //       <Route path="/procedure" element={<Procesure />} />

  return (
    <header className="navbar1">
      <div className="navbar-container1">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>

        <div className="nav-space">
          <nav className={`nav-links ${ menuOpen ? "active" : "" }`}>
            <Link
              to="/"
              className={`nav-link ${ activeLink === "home" ? "active" : "" }`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="/vacancies"
              className={`nav-link ${ activeLink === "vacancies" ? "active" : ""
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
                className={`nav-link ${ activeLink === "candidates" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("candidates")}
              >
                Candidates
              </Link>
              {dropdownOpen.candidates && (
                <div className="dropdown-content">
                  <Link to="/job-application-process">Job Application Process</Link>
                  <Link to="/job-application-tips">Job Application Tips</Link>
                  <Link to="/star-method">STAR-Method</Link>
                  <Link to="/example-cv">Example CV</Link>
                </div>
              )}
            </div>


            <div
              className="nav-link dropdown"
              onClick={() => toggleDropdown("clients")}
            >
              <Link
                to="#"
                className={`nav-link ${ activeLink === "clients" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("clients")}
              >
                Clients
              </Link>
              {dropdownOpen.clients && (
                <div className="dropdown-content">
                  <Link to="/procedure">The Procedure</Link>
                  <Link to="/our-services">Our Services</Link>
                  <Link to="/sourcing-talent">Sourcing Talent</Link>
                </div>
              )}
            </div>


            <div
              className="nav-link dropdown"
              onClick={() => toggleDropdown("about")}
            >
              <Link
                to="#"
                className={`nav-link ${ activeLink === "about" ? "active" : ""
                  }`}
                onClick={() => handleNavClick("about")}
              >
                About Us
              </Link>
              {dropdownOpen.about && (
                <div className="dropdown-content">
                  <Link to="/working-at-boss-recruitement">Working at BOSS Recruitment</Link>
                  <Link to="/privacy-statement">Privacy Statement</Link>
                  <Link to="/contact-us">Contact Us</Link>
                  <Link to="/direction">Direction</Link>
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
              className={`mobile-nav-link ${ activeLink === "home" ? "active" : ""
                }`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="/vacancies"
              className={`mobile-nav-link ${ activeLink === "vacancies" ? "active" : ""
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
                  <Link to="/job-application-process">Job Application Process</Link>
                  <Link to="/job-application-tips">Job Application Tips</Link>
                  <Link to="/star-method">STAR-Method</Link>
                  <Link to="/example-cv">Example CV</Link>
                </div> */}
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.candidates ? "block" : "none" }}
              >
                <Link to="/job-application-process" onClick={() => setMenuOpen(false)}>
                  Job Application Process
                </Link>
                <Link to="/job-application-tips" onClick={() => setMenuOpen(false)}>
                  Job Application Tips
                </Link>

                <Link to="/star-method" onClick={() => setMenuOpen(false)}>
                  STAR-Method
                </Link>

                <Link to="/example-cv" onClick={() => setMenuOpen(false)}>
                  Example CV
                </Link>
              </div>
            </div>

            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("clients")}
            >
              Clients
              {/* <Link to="/procedure">The Procedure</Link>
                  <Link to="/our-services">Our Services</Link>
                  <Link to="#sourcing">Sourcing Talent</Link> */}
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.clients ? "block" : "none" }}
              >
                <Link to="/procedure" onClick={() => setMenuOpen(false)}>
                  The Procedure
                </Link>
                <Link to="/our-services" onClick={() => setMenuOpen(false)}>
                  Our Services
                </Link>
                <Link to="/sourcing-talent" onClick={() => setMenuOpen(false)}>
                  Sourcing Talent
                </Link>
              </div>
            </div>



            <div
              className="mobile-nav-link dropdown"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              {/* <Link to="/procedure">The Procedure</Link>
                  <Link to="/our-services">Our Services</Link>
                  <Link to="#sourcing">Sourcing Talent</Link> */}
              <div
                className="dropdown-content mobile"
                style={{ display: dropdownOpen.about ? "block" : "none" }}
              >
                <Link to="/working-at-boss-recruitement" onClick={() => setMenuOpen(false)}>
                  Working at BOSS Recruitment
                </Link>
                <Link to="/privacy-statement" onClick={() => setMenuOpen(false)}>
                  Privacy Statement
                </Link>
                <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>

                <Link to="/direction" onClick={() => setMenuOpen(false)}>
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

export default Navbar5;