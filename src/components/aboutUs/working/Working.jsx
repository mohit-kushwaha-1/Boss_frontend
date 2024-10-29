import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import WorkingHero from './WorkingHero'
import WorkingText from './WorkingText'
const Working = () => {
  return (
    <>
        <Navbar1/>

        <div className='container'>
            <WorkingHero/>
            <WorkingText/>
           <Footer/>
        </div>
    </>
  )
}

export default Working
