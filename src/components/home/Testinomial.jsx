import React from 'react'
import '../../style/home/Testinomial.css'
import t1 from '../../../public/images/t1.png'
import t2 from '../../../public/images/t2.png'
const Testinomial = () => {
  return (
    <div className='testinomail-container'>
           <div className='testinomail-container-text'>
                <h2>Testimonials</h2>
                <h6>Our clients praise us for our great results</h6>
           </div>
           <div className='testinomail-container-content'>
                 <div className='testinomail-container-content-top'>
                      <h1>We Love Our Client Feedback</h1>
                 </div>
                 <div className='testinomail-container-content-bottom'>
                      <div className='testinomail-container-content-img1'>
                         <img src={t1} alt="" />
                      </div>
                      <div>

                      </div>
                 </div>
           </div>
    </div>
  )
}

export default Testinomial
