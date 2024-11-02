import React from 'react'
import Navbar4 from '../../home/Navbar4'
import Footer from '../../Footer'
import SourcingHero from './SourcingHero'
import SourcingText from './SourcingText'
import SourcingForm from './SourcingForm'
const Sourcing = () => {
  return (
    <>
       <Navbar4/>
       <SourcingHero/>
       <div className='container'>
             <SourcingText/>
             <SourcingForm/>
       </div>
       <Footer/>
    </>
  )
}

export default Sourcing
