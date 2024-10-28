import React from 'react'
import '../../../style/client/Services/ServicesCard.css'
import ct41 from '../../../../public/images/ct41.png'
import ct42 from '../../../../public/images/ct42.png'
import ct43 from '../../../../public/images/ct43.png'
const ServicesCard = () => {
  return (
    <div className='services-card-container'>
         <div className='services-card'>
                <div className='services-card-box'>
                     <h2>Outsourcing Services</h2>
                     <h4>We streamline the talent acquisition process, handling everything from sourcing to onboarding, so you can stay focused on your core business. Our scalable workforce solutions ensure you have the right talent when you need it, tailored precisely to your requirements.</h4>
                </div>
                <div className='services-card-box-image'>
                    <img src={ct41} alt="" />
                </div>
         </div>

         <div className='services-card'>

               <div className='services-card-box-image'>
                    <img src={ct42} alt="" />
                </div>
                <div className='services-card-box'>
                     <h2>Direct Hire Recruitment Services</h2>
                     <h4>Our direct hire solutions help you build a strong, dedicated team. We find candidates who not only meet your skills requirements but also align with your company’s culture and goals, ensuring a perfect long-term fit.</h4>
                </div>
                
         </div>

      
         <div className='services-card'>
                <div className='services-card-box'>
                     <h2>Freelance Consultants</h2>
                     <h4>For specialized expertise and project-based support, our network of freelance professionals is ready to make an impact. We manage the vetting and coordination, giving you access to experts without the commitment of a full-time hire.</h4>
                </div>
                <div className='services-card-box-image'>
                    <img src={ct43} alt="" />
                </div>
         </div>

         
    </div>
  )
}

export default ServicesCard
