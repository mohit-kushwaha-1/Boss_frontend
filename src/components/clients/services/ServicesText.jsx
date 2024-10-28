import React from 'react'
import '../../../style/client/Services/ServiceText.css'
import ServicesCard from './ServicesCard'
const ServicesText = () => {
  return (
    <>
            <div className='services-text-contaner'>
                  <div className='services-text-contaner-text'>
                      <h1>Comprehensive Recruitment<br/> Solutions for Your Growing Business</h1>
                      <h4>At BOSS Recruitment, we offer a full suite of hiring services designed to meet the diverse needs of businesses in Sint Maarten and beyond.</h4>
                  </div>

                  <div>
                    <ServicesCard/>
                  </div>
            </div> 
    </>
  )
}

export default ServicesText
