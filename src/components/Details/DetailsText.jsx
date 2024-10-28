import React from 'react'
import '../../style/details/DetailsText.css'
const DetailsText = ({data}) => {
  return (
    <div className='detail-text-container'>
            <div className='details-content-container'>
                   <div className='details-content-container-heading'>
                      <h1 >Job Description</h1>
                   </div>
                   <div className='details-content-container-heading1'>
                      <h2 >Job Title</h2>
                      <h4>{data?.jobName}</h4>
                   </div>

                   <div className='details-content-container-heading1'>
                     <h2 style={{textAlign:"left"}}>Location</h2>
                     <h4 style={{textAlign:"left"}}>{data?.location}</h4>
                   </div>

                   <div className='details-content-container-heading1'>
                     <h2 style={{textAlign:"left"}}>Position Overview</h2>
                     <h4>{data?.jobDescription}</h4>
                   </div>


                   <div className='details-content-container-heading1'>
                     <h2 style={{textAlign:"left"}}>Key Responsibility</h2>
                     <div>
                        <ul>
                            {
                                data?.responsibilities?.map((item)=>{
                                       return(
                                        <>
                                        <li><h4>{item}</h4></li>
                                        </>
                                       )
                                })
                            }
                        </ul>
                     </div>
                   </div>


                   <div className='details-content-container-heading1'>
                      <h2 style={{textAlign:"left"}}>Qualifications & Skills</h2>
                      <div>
                        <ul>
                            {
                                data?.requirements?.map((item)=>{
                                       return(
                                        <>
                                        <li><h4>{item}</h4></li>
                                        </>
                                       )
                                })
                            }
                        </ul>
                     </div>
                      {/* requirements */}
                   </div>
            </div>
    </div>
  )
}

export default DetailsText
