import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../../style/home/homeCard.css";
import img1 from "../../../public/images/img1.png";
import { baseUrl } from "../helper/helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const HomeCard = () => {
  const [data, setData] = useState();
  const navigate = useNavigate()
  const handlevac = ()=>{
    navigate('/vac')
  }
  console.log(data, "data is now");
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await axios.get(baseUrl + "/api/jobPost/getAllJobs");
      console.log("response is", response.data.jobs);

      if (response.data) {
        // console.log("data is now");
        // console.log(filter.length);
        setData(response.data.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title" >Ready to Take Your Career to the Next Level?</h1>
        <button className="browse-button" onClick={handlevac}>
          Browse All Opportunities
          <MdArrowOutward className="icon" />
        </button>

        {/* Job Cards Section */}
        <div className="job-cards">
          {/* Job Card 1 */}
          <div className="job-card">
            {data ? (
              <img
                // src={img1}
                src={`${baseUrl}${data[0]?.image}`}
                alt="People working in an office"
                className="job-image"
              />
            ) : (
              <img
                src={img1}
                // src={`${baseUrl}${data[1]?.logo}`}
                alt="People working in an office"
                className="job-image"
              />
            )}

            {data ? (
              <h2 className="job-title">{data[0]?.jobName}</h2>
            ) : (
              <h2 className="job-title">Reservation Collection Clerk</h2>
            )}

            {data ? (
              <p className="location">{data[0]?.location}</p>
            ) : (
              <p className="location">Philipsburg, Sint Maarten</p>
            )}

            <div className="details">
              <ul className="job-details">
                {data ? (
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> {data[0]?.jobType}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> Full Time
                  </li>
                )}

                {data ? (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {data[0]?.upper_jd[0]}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" /> Bachelor
                  </li>
                )}

                {data ? (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {data[0]?.upper_jd[1]}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" /> Master
                  </li>
                )}
              </ul>
            </div>

            <button className="vacancy-button">
              View Vacancy <MdArrowOutward className="icon" />
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            {data ? (
              <img
                // src={img1}
                src={`${baseUrl}${data[1]?.image}`}
                alt="People working in an office"
                className="job-image"
              />
            ) : (
              <img
                src={img1}
                // src={`${baseUrl}${data[1]?.logo}`}
                alt="People working in an office"
                className="job-image"
              />
            )}

            {data ? (
              <h2 className="job-title">{data[1]?.jobName}</h2>
            ) : (
              <h2 className="job-title">Reservation Collection Clerk</h2>
            )}

            {data ? (
              <p className="location">{data[1]?.location}</p>
            ) : (
              <p className="location">Philipsburg, Sint Maarten</p>
            )}

            <div className="details">
              <ul className="job-details">
                {data ? (
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> {data[1]?.jobType}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> Full Time
                  </li>
                )}

                {data ? (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {data[1]?.upper_jd[0]}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" /> Bachelor
                  </li>
                )}

                {data ? (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {data[1]?.upper_jd[1]}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" /> Master
                  </li>
                )}
              </ul>
            </div>

            <button className="vacancy-button">
              View Vacancy <MdArrowOutward className="icon" />
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="job-card">
            {data ? (
              <img
                // src={img1}
                src={`${baseUrl}${data[2]?.image}`}
                alt="People working in an office"
                className="job-image"
              />
            ) : (
              <img
                src={img1}
                // src={`${baseUrl}${data[1]?.logo}`}
                alt="People working in an office"
                className="job-image"
              />
            )}

            {data ? (
              <h2 className="job-title">{data[2]?.jobName}</h2>
            ) : (
              <h2 className="job-title">Reservation Collection Clerk</h2>
            )}

            {data ? (
              <p className="location">{data[2]?.location}</p>
            ) : (
              <p className="location">Philipsburg, Sint Maarten</p>
            )}

            <div className="details">
              <ul className="job-details">
                {data ? (
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> {data[2]?.jobType}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> Full Time
                  </li>
                )}

                {data ? (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {data[2]?.upper_jd[0]}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" /> Bachelor
                  </li>
                )}

                {data ? (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {data[2]?.upper_jd[1]}
                  </li>
                ) : (
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" /> Master
                  </li>
                )}
              </ul>
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

export default HomeCard;
