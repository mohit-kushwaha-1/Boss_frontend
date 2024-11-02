import React from 'react'
import Navbar4 from '../../home/Navbar4'
import Footer from '../../Footer'
import ProcessureHero from './ProcessureHero'
import ProcesureText from './ProcesureText'
const Procesure = () => {
  return (
    <>
       <Navbar4/>
       <ProcessureHero/>
       <div className='container'>
          <ProcesureText/>
       </div>
       <Footer/>
    </>
  )
}

export default Procesure
