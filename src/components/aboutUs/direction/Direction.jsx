import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import AddressMap from './AddressMap'
const Direction = () => {
  return (
    <>
       <Navbar1/>

       <div className='container'>
        <AddressMap/>
          <Footer/>
       </div>
    </>
  )
}

export default Direction
