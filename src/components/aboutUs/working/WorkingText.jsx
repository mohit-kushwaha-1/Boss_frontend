import React from "react";
import '../../../style/AboutUs/working/WorkingText.css'
import { useNavigate } from "react-router-dom";
const WorkingText = () => {
  
  const navigate = useNavigate();

     const handleNav = ()=>{
          navigate('/about-contact')
     }
  return (
    <div className="working-main-container">
      <div className="working-content">
        <h1>Working at BOSS Recruitment</h1>
        <h4>
          At BOSS Recruitment, we’re passionate about shaping the next
          generation of recruitment professionals. Whether you're new to
          recruiting or have minimal experience, our team of seasoned experts
          and award-winning recruitment process create the perfect environment
          for growth. We welcome not only recent graduates but also individuals
          with industry experience looking to transition into the rewarding
          world of recruitment.<br/> <br/> As a recruiter, your role is dynamic and
          engaging. You'll connect with companies to understand their talent
          needs while also interacting with candidates to discover if they’re a
          great fit for your clients. It’s a profession that requires constant
          networking, writing compelling job ads, evaluating applications, and
          proactively searching for top talent.
        </h4>
        <h3>Curious about our company and culture?<br/> Reach out to Us.</h3>
        <button onClick={handleNav}>Contact Us</button>
      </div>
    </div>
  );
};

export default WorkingText;
