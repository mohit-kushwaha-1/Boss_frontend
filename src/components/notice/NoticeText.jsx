import React from 'react'
import '../../style/home/NoticeText.css'
const NoticeText = () => {
  return (
    <div className='notice-text-container'>
        <h1>Protect Yourself from Scammers!</h1>

        <div className='notice-text-content'>
             <h4>At BOSS Recruitment, your safety and trust are of utmost importance. Unfortunately, we have encountered instances where individuals have fraudulently posed as our employees. While this is concerning, there are simple steps you can take to protect yourself from potential scams:</h4>
             <h4><span style={{fontWeight:"bold"}}>Verify Identity:</span>If someone contacts you claiming to be from BOSS Recruitment, verify their identity by reaching out through our official contact details listed on our website. We’re here to help confirm if the contact is legitimate.</h4>
             <h4><span style={{fontWeight:"bold"}}> Safeguard Personal Information:</span>Safeguard Personal Information: Never share sensitive personal information such as passwords, financial details, or PINs with anyone. Our team will never ask for such information via unauthorized channels.</h4>
             <h4><span style={{fontWeight:"bold"}}>Report Suspicious Activity: </span>If you receive messages or calls that seem suspicious, block the sender and report it. This helps prevent further attempts from reaching you.</h4>
             <h4>We are actively working with local authorities to address this issue. Thank you for your understanding and cooperation. Together, we can ensure that your experience with BOSS Recruitment remains safe and secure.</h4>
            <h4> Stay vigilant, and always feel free to contact us if you have any concerns!</h4>
            <h4 style={{fontWeight:"bold"}}>Boss Recruitment</h4>
        </div>

    </div>
  )
}

export default NoticeText
