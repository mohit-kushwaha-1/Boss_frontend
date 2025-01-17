import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import '../../style/home/homeCard.css'
import img1 from '../../../public/images/img1.png'
import { useNavigate } from "react-router-dom";
const HomeCard1 = () =>
{

  const navigate = useNavigate()
  const handlevac = () =>
  {
    navigate('/vacancies')
  }
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">
          Ready to Take Your Career to the Next Level?
        </h1>
        <button className="browse-button" onClick={handlevac}>
          Browse All Opportunities
          <MdArrowOutward className="icon" />
        </button>

        {/* Job Cards Section */}
        <div className="job-cards">
          {/* Job Card 1 */}
          <div className="job-card">
            <img
              src={img1}
              alt="People working in an office"
              className="job-image"
            />
            <h2 className="job-title">Reservation Collection Clerk</h2>
            <p className="location">Philipsburg, Sint Maarten</p>

            <div className="details">
              <ul className="job-details">

                <li className="detail-item">
                  <FaBriefcase className="icon-detail" /> Full Time
                </li>
                <li className="detail-item">
                  <FaGraduationCap className="icon-detail" /> Bachelor
                </li>
                <li className="detail-item">
                  <FaGraduationCap className="icon-detail" /> Master
                </li>
              </ul>
            </div>

            <button className="vacancy-button">
              View Vacancy <MdArrowOutward className="icon" />
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            <img
              src={img1}
              alt="People working in an office"
              className="job-image"
            />
            <h2 className="job-title">Commercial Data Analyst</h2>
            <p className="location">Philipsburg, Sint Maarten</p>

            <div className="details">
              <ul className="job-details">
                <li className="detail-item">
                  <FaMapMarkerAlt className="icon-detail" /> Noord Holland
                </li>
                <li className="detail-item">
                  <FaBriefcase className="icon-detail" /> Full Time
                </li>
                <li className="detail-item">
                  <FaGraduationCap className="icon-detail" /> Bachelor
                </li>
                <li className="detail-item">
                  <FaGraduationCap className="icon-detail" /> Master
                </li>
              </ul>
            </div>

            <button className="vacancy-button">
              View Vacancy <MdArrowOutward className="icon" />
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="job-card">
            <img
              src={img1}
              alt="People working in an office"
              className="job-image"
            />
            <h2 className="job-title">
              Customer Service Agent (CSA)
            </h2>
            <p className="location">Philipsburg, Sint Maarten</p>

            <div className="details">
              <div className="job-details">
                {/* <li className="detail-item">
                  <FaMapMarkerAlt className="icon-detail" /> Noord Holland
                </li>
                <li className="detail-item">
                  <FaBriefcase className="icon-detail" /> Full Time
                </li>
                <li className="detail-item">
                  <FaGraduationCap className="icon-detail" /> Bachelor
                </li>
                <li className="detail-item">
                  <FaGraduationCap className="icon-detail" /> Master
                </li> */}

                <div>
                  <FaMapMarkerAlt className="icon-detail" />
                  <FaBriefcase className="icon-detail" />
                  <FaGraduationCap className="icon-detail" />
                  <FaGraduationCap className="icon-detail" />
                </div>

                <div>
                  <span>Full Time</span>
                  <span>Bachelor</span>
                  <span>Noord Holland</span>
                  <span>Master</span>
                </div>
              </div>
            </div>

            <button className="vacancy-button">
              View Vacancy <MdArrowOutward className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard1;