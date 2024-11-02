import React from 'react'
import Navbar3 from '../../home/Navbar3'
import CandidateHero1 from './CandidateHero1'
import Footer from '../../Footer'
import CandidateDetails1 from './CandidateDetails1'
import CandidateExplore from './CandidateExplore'
const CandidatePage1 = () => {
  return (
    <>

    <Navbar3/>
    <CandidateHero1/>
         <div className='container'>
              
              <CandidateDetails1/>
         </div>
         <CandidateExplore/>
         <Footer/>
    </>
  )
}

export default CandidatePage1
