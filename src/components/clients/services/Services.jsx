import React from 'react'
import Navbar4 from '../../home/Navbar4'
import Footer from '../../Footer'
import ServicesHero from './ServicesHero'
import ServicesText from './ServicesText'
const Services = () => {
  return (
    <>
      <Navbar4/>
      <ServicesHero/>
    <div className='container'>

        <ServicesText/>
        
    </div>
    <Footer/>
    </>
  )
}

export default Services
