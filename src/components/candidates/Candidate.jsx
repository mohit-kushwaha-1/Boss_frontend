import React from 'react'
import Navbar3 from '../home/Navbar3'
import CandidateHero from './CandidateHero'
import CandidateDetails from './CandidateDetails'
import Footer from '../Footer'
const Candidate = () => {
  return (
    <>
       <Navbar3/>
       <CandidateHero/>
        <div className='container'>
          <CandidateDetails/>
        </div>
        <Footer/>
    </>
  )
}

export default Candidate
