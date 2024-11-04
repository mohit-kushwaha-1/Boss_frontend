import React from "react";
import "../../style/HeroHome.css";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import girl from '../../../public/images/girl.png'
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
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
          <button className="browse-button1" onClick={handlevac} style={{left:"0px"}}>
          Browse All Opportunities
          <MdArrowOutward className="icon" />
        </button>
           

          
        </div>

        <div className="girl-image">
              <img src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
