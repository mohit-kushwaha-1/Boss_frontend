import React from 'react'
import Navbar1 from '../../home/Navbar1';
import Footer from '../../Footer';
import StartText from './StartText';
import CandidateExplore from '../page2/CandidateExplore';
import StarHero from './StarHero';
const StartMain = () => {
  return (
    <>
        <Navbar1/>
        <StarHero/>
        <div className='container'>
            
            <StartText/>
            <CandidateExplore/>
            <Footer/>
        </div>
    </>
  )
}

export default StartMain
