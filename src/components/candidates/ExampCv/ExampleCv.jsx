import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import ExampleHero from './ExampleHero'
import ExampleText from './ExampleText'
const ExampleCv = () => {
  return (
    <>
          <Navbar1/>
          <ExampleHero/>
          <div className='container'>

            <ExampleText/>
               <Footer/>
          </div>
    </>
  )
}

export default ExampleCv
