import React from 'react'
// import '../../../style/candidate/page1/CandidatePage1Details.css'
import '../../../style/candidate/page1/CandidatePage1Details.css'
import { useNavigate } from 'react-router-dom';
const ProcesureText = () =>
{


  const navigate = useNavigate();

  const handleNav = () =>
  {
    navigate('/contact-us')
  }
  return (
    <div>
      <div className='Candidate-Details1-container'>
        <h2>Why Choose BOSS Recruitment?</h2>

        <div className='Candidate-Details1-container-content'>
          <div>

            <p>In a highly competitive recruitment and selection market, BOSS Recruitment stands out for its personalized approach. Our consultants are the foundation of our success, offering professionalism and deep expertise to both clients and candidates. We adapt our process to the needs of each client, ensuring flexibility and a seamless experience. Here's an overview of our standard recruitment procedure:</p>
          </div>


          <div>
            <h4>1. Initial Consultation</h4>
            <p>We begin with the client. If we haven’t previously worked with the organization or department with the vacancy, we arrange an in-person meeting to get to know them. The goal is to gather a thorough understanding of the company and the specific role. This meeting typically involves both the HR manager and the hiring manager, allowing us to get a clear picture of the required skills, company culture, and ideal candidate profile.</p>
          </div>


          <div>
            <h4>2. Crafting the Company and Job Profile</h4>
            <p>Based on the information collected, BOSS Recruitment creates detailed company and job profiles. These profiles, once approved by the client, serve as the foundation for informing and engaging potential candidates. We ensure transparent communication throughout the entire process, providing regular updates and feedback to both the client and candidates for a smooth progression.</p>
          </div>


          <div>
            <h4>3. Identifying Potential Candidates</h4>
            <p>We perform a comprehensive market scan based on the agreed-upon profiles and actively seek out potential candidates. Our approach includes reviewing our extensive candidate database, utilizing online job listings, and, where necessary, headhunting suitable candidates.</p>
          </div>


          <div>
            <h4>4. Candidate Selection Process</h4>
            <p>Our consultants conduct in-depth interviews with shortlisted candidates, where we thoroughly assess their CVs, discuss their career goals, and understand their ambitions. This ensures we present candidates ready for their next career move, with a focus on personal development and growth. Reference checks are conducted as needed to ensure a complete evaluation of each candidate.</p>
          </div>


          <div>
            <h4>5. Candidate Presentation</h4>
            <p>We present the most suitable candidates who align with both the competency requirements and the company culture. Along with detailed candidate profiles, we provide strong justifications for their fit. If necessary, we also collaborate with trusted independent agencies to enhance the selection process.</p>
          </div>


          <div>
            <h4>6. Ongoing Support</h4>
            <p>Once a candidate is hired, BOSS Recruitment remains involved. We check in regularly with both the client and the new hire to ensure a smooth transition and that all expectations are met. This feedback helps us continuously improve and provide even more tailored solutions for future recruitment needs.</p>
          </div>


          <div>
            <h4>Our commitment to both clients and candidates ensures a professional, supportive, and successful recruitment process from start to finish.</h4>

          </div>


          <div className='Processure-button-text'>
            <h5>Have More Questions?</h5>
            <button onClick={handleNav}>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcesureText
