import React from 'react'
import Navbar1 from '../../home/Navbar1'
import CandidateHero1 from './CandidateHero1'
import Footer from '../../Footer'
import CandidateDetails1 from './CandidateDetails1'
import CandidateExplore from './CandidateExplore'
const CandidatePage1 = () => {
  return (
    <>

    <Navbar1/>
         <div className='container'>
              <CandidateHero1/>
              <CandidateDetails1/>
              <CandidateExplore/>
              <Footer/>
         </div>
    </>
  )
}

export default CandidatePage1
