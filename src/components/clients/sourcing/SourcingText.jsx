import React from 'react'
import {Link} from 'react-router-dom'
import '../../../style/client/soucing/SoucingText.css'
const SourcingText = () => {
  return (
    <div className='soucing-text-continaer'>
           <div className='souncing-text-content'>
                <h1>What can we do for your organization?</h1>

                <div className='souncing-text-content-text'>
                     <h3>With over 10 years of experience, Boss Recruitment has established a solid track record built on several core pillars:</h3>
                      <ul>
                         <li><h4>Our Team</h4></li>
                         <li><h4>The Tools</h4></li>
                         <li><h4>International Network</h4></li>
                         <li><h4>Range of Services</h4></li>
                         <li><h4>Transparent Process</h4></li>
                         <li><h4>Our Track Record</h4></li>
                      </ul>

                      <button>Get in Touch</button>
                </div>


                <div className='souncing-text-content-text'>
                    <h2>Our Team</h2>
                    <h4>Our consultants come from the industries they serve, making them experts in matching candidates with companies—whether it's aligning with company culture or filling highly specialized roles.</h4>
                </div>

                <div className='souncing-text-content-text'>
                     <h2>The Tools</h2>
                     <h4>Our cutting-edge tools connect our consultants to qualified candidates efficiently, allowing us to focus on engaging and recruiting top talent quickly without sacrificing quality.</h4>
                </div>

                <div className='souncing-text-content-text'>
                     <h2>Regional and International Reach</h2>
                     <h4>As part of a global network, we help companies in the Caribbean and beyond attract top-tier talent. Whether hiring for local roles in Philipsburg or looking to expand internationally, we have the connections to find the best candidates.</h4>
                </div>

                <div className='souncing-text-content-text'>
                     <h2>Range of Services</h2>
                     <h3>We cover all your recruitment needs, offering a variety of staffing solutions: </h3>

                     <ul>
                         <li><h4>Recruitment & selection for permanent roles </h4></li>
                         <li><h4>Freelance/ZZP experts for interim needs </h4></li>
                         <li><h4>Temporary staffing for short-term challenges
                         </h4></li>
                     </ul>
                </div>


                <div className='souncing-text-content-text'>
                     <h2>Transparent Process</h2>
                     <h4>We maintain clear and consistent communication throughout the recruitment process, ensuring full transparency at every stage.</h4>
                </div>

                <div className='souncing-text-content-text'>
                    <h2>Our Track Record</h2>
                    <h3>Our success speaks for itself—ask us for client references, and hear how we’ve helped organizations like yours build strong teams.</h3>
                </div>

                <div className='souncing-text-content-text'>
                     <Link to="/client-procesure">View Detailed Process- Click Here</Link>
                </div>

           </div>
    </div>
  )
}

export default SourcingText
