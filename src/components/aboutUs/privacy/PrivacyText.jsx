import React from 'react'
import '../../../style/AboutUs/privacy/PrivacyText.css'
import { useNavigate } from 'react-router-dom';
const PrivacyText = () => {
  const navigate = useNavigate();

  const handleNav = ()=>{
       navigate('/about-contact')
  }
  return (
    <div className='privacy-text-container'>
          <div className='privacy-text-content'>
                   <h1>Privacy Statements- BOSS Recruitment</h1>

                   <div className='privacy-text-content-text'>
                     <h4>At BOSS Recruitment, we value your privacy and are committed to protecting the personal data we collect throughout the recruitment and selection process, as well as during the conclusion and execution of employment or service agreements.</h4>
                   </div>

                   <div className='privacy-text-content-text'>
                      <h3>We adhere to the following principles in managing your personal data:</h3>
                       <ul>
                         <li><h4><span style={{fontWeight:"bold"}}>Purpose-Driven Processing: </span>We only process personal data for the specific purposes outlined in this statement and for which the data was provided.</h4></li>
                          <li><h4><span style={{fontWeight:"bold"}}> Minimal Data Retention: </span>We limit the processing and retention of personal data to what is strictly necessary to fulfill the intended purposes and meet legal obligations.</h4></li>
                         <li><h4><span style={{fontWeight:"bold"}}>Data Accuracy: </span> We strive to maintain the accuracy of all personal data processed. </h4></li>
                         <li><h4><span style={{fontWeight:"bold"}}>Security Measures: </span>We ensure the protection of your personal data by implementing and regularly reviewing appropriate technical and organizational security measures to prevent data loss or unauthorized processing.</h4></li>
                       </ul>
                   </div>


                   <div className='privacy-text-content-text'>

                    <div className='privacy-text-content-text-text'>
                    <h3 style={{fontSize:"45px"}}>Why We Process Your Data:</h3>
                     <h2>1. For Recruitment Purposes:</h2>
                      <h4>When you apply for a role or register on our website, we collect your personal data to assess your suitability for current or future positions. We also manage your data within our recruitment database to facilitate communication and inform you about potential opportunities.</h4>
                       <ul>
                        <li><h5><span style={{fontWeight:"bold"}}> Legal Basis: </span>Our legal basis for processing your data includes legitimate interest in finding suitable candidates, your consent when submitting your application, and our need to comply with legal obligations.</h5></li>
                       </ul>
                    </div>

                    <div className='privacy-text-content-text-text'>
                         <h2>2. To Enter Into an Employment or Service Agreement:</h2>
                        <h4>If you are selected for a role, we process your personal data to establish and manage your employment or service agreement with us. This includes the necessary information to execute the contract and comply with legal obligations as an employer.</h4>
                    </div>
                    
                   </div>


                   <div className='privacy-text-content-text'>
                        <h3>Personal Data We Process:</h3>
                        <ul>
                            <li><h4>General information (e.g., name, contact details, CV, education, employment history)</h4></li>
                             <li><h4>Identification documents (if you are employed)</h4></li>
                            <li><h4>Other relevant details such as work permits, references, and test results</h4></li>
                        </ul>
                   </div>


                   <div className='privacy-text-content-text'>
                      <h3>Data Retention:</h3>
                      <h4>Your personal data will be retained for no longer than one year after the end of the application process unless you provide explicit consent for extended retention. If you are employed, we will retain your data for up to two years after the termination of your agreement, or longer if required by law or for the protection of legal interests.</h4>
                   </div>

                   <div className='privacy-text-content-text'>
                      <h3>Your Rights:</h3>
                      <h4>You have the right to request access, correction, or deletion of your personal data. You can also request data portability or raise concerns about how your data is being processed. For questions or complaints, please contact us at [Insert Contact Information]. Additionally, you can submit a complaint to the relevant Data Protection Authority.</h4>
                   </div>

                   <div className='privacy-text-content-text'>
                     <h6>For any questions regarding our privacy practices,
                     feel free to contact us. </h6>
                   </div>

                   <div className='privacy-text-content-text'>
                    <button onClick={handleNav}>
                        Contact Us
                    </button>
                   </div>

          </div>
    </div>
  )
}

export default PrivacyText
