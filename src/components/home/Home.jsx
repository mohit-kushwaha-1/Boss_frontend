import React from 'react'
import Navbar1 from './Navbar1'
import HeroHome from './HeroHome'
import Seeking from './Seeking'
import HomeCard1 from './HomeCard1'
import Footer from '../Footer'
import Explor from './Explor'
import HomeCard2 from './HomeCard2'
import Testinomial from './Testinomial'
const Home = () => {
  return (
    <>
      <Navbar1/>
      <HeroHome/>
      
       <div className='container'>
            
            <Seeking/>
            <HomeCard1/>

           
            {/* <Testinomial/> */}
            
       </div>
       <Explor/>
      <Footer/>
    </>
  )
}

export default Home
