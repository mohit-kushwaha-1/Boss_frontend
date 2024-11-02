import React from 'react'
import Navbar3 from '../../home/Navbar3'
import Footer from '../../Footer'
import ExampleHero from './ExampleHero'
import ExampleText from './ExampleText'
const ExampleCv = () => {
  return (
    <>
          <Navbar3/>
          <ExampleHero/>
          <div className='container'>

            <ExampleText/>
               
          </div>
          <Footer/>
    </>
  )
}

export default ExampleCv
