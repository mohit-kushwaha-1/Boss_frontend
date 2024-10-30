import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import ServicesHero from './ServicesHero'
import ServicesText from './ServicesText'
const Services = () => {
  return (
    <>
      <Navbar1/>
      <ServicesHero/>
    <div className='container'>

        <ServicesText/>
        <Footer/>
    </div>
    </>
  )
}

export default Services
