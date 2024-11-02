import React from 'react'
import Navbar5 from '../../home/Navbar5'
import Footer from '../../Footer'
import WorkingHero from './WorkingHero'
import WorkingText from './WorkingText'
const Working = () => {
  return (
    <>
        <Navbar5/>
        <WorkingHero/>
        <div className='container'>
            
            <WorkingText/>

        </div>
        <Footer/>
    </>
  )
}

export default Working
