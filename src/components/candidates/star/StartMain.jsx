import React from 'react'
import Navbar3 from '../../home/Navbar3';
import Footer from '../../Footer';
import StartText from './StartText';
import CandidateExplore from '../page2/CandidateExplore';
import StarHero from './StarHero';
const StartMain = () => {
  return (
    <>
        <Navbar3/>
        <StarHero/>
        <div className='container'>
            
            <StartText/>
            
        </div>
        <CandidateExplore/>
            <Footer/>
    </>
  )
}

export default StartMain
