import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import ExampleHero from './ExampleHero'
import ExampleText from './ExampleText'
const ExampleCv = () => {
  return (
    <>
          <Navbar1/>
          <div className='container'>
            <ExampleHero/>
            <ExampleText/>
               <Footer/>
          </div>
    </>
  )
}

export default ExampleCv
