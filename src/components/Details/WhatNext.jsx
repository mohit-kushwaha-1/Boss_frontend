import React from 'react'
import '../../style/details/WhatNext.css'
const WhatNext = () =>
{
   return (
      <div className='what-next-container'>
         <h1>What’s Next in the Application Process?</h1>


         <div className='what-next-content'>
            <div className='what-next-content-box'>
               <div className='what-next-content-left'>
                  <div className='what-next-circle'>1</div>
                  <div className='vetical-line-div'></div>
               </div>

               <div className='what-next-content-right'>
                  <h3>Application Submission</h3>
                  <p>You've successfully submitted your application! Please ensure all required documents and information are included for a complete review.</p>
               </div>

            </div>

            <div className='what-next-content-box'>
               <div className='what-next-content-left'>
                  <div className='what-next-circle'>2</div>
                  <div className='vetical-line-div'></div>
               </div>

               <div className='what-next-content-right'>
                  <h3>Selection and Evaluation</h3>
                  <p>Our team will thoroughly review your application, taking into consideration your qualifications and experience. Based on this evaluation, we will proceed to invite you for a (digital) interview with one of our recruiters. This interview aims to gain further insights into your background, skills, and motivation.</p>
               </div>

            </div>


            <div className='what-next-content-box'>
               <div className='what-next-content-left'>
                  <div className='what-next-circle'>3</div>
                  <div className='vetical-line-div'></div>
               </div>

               <div className='what-next-content-right'>
                  <h3>Client Introduction</h3>
                  <p>After our consultation with you, we will introduce you to our client. Depending on their needs, you may participate in one or more interviews, along with potential assessments, to further assess your suitability for the role.</p>
               </div>

            </div>


            <div className='what-next-content-box'>
               <div >
                  <div className='what-next-circle'>4</div>

               </div>

               <div className='what-next-content-right'>
                  <h3>Job Offer and accepting</h3>
                  <p>If the client decides to offer you the position, you will receive a formal job offer. Once you accept, we’ll handle the financial processing and finalize everything for your new role.</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default WhatNext
