import React from 'react'
import Navbar1 from '../home/Navbar1'
import CandidateHero from './CandidateHero'
import CandidateDetails from './CandidateDetails'
import Footer from '../Footer'
const Candidate = () => {
  return (
    <>
       <Navbar1/>
       <CandidateHero/>
        <div className='container'>

            <CandidateDetails/>
            <Footer/>
        </div>
    </>
  )
}

export default Candidate
