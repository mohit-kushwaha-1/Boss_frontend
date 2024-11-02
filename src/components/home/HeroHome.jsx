import React from "react";
import "../../style/HeroHome.css";
import { useNavigate } from "react-router-dom";
const HeroHome = () => {

  const navigate = useNavigate()
  const handlevac = ()=>{
    navigate('/vac')
  }
  return (
    <div>
      <div className="hero-section1">
        <div className="hero-content1">
          <h1>Your Partner in Recruitment & Executive Search </h1>
          <h2>
            We specialize in finding the right fit for staff positions, aligning
            talent with opportunity.
          </h2>
          <div className="search-bar">
            <div className="search-button" onClick={handlevac}>
              <h4>Browse All Opportunities</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M7 17.5L17 7.5"
                  stroke="#7B0801"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7.5H17V17.5"
                  stroke="#7B0801"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
