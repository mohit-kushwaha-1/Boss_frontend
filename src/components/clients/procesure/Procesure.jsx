import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import ProcessureHero from './ProcessureHero'
import ProcesureText from './ProcesureText'
const Procesure = () => {
  return (
    <>
       <Navbar1/>
       <ProcessureHero/>
       <div className='container'>
            
            <ProcesureText/>
            <Footer/>
       </div>
    </>
  )
}

export default Procesure
