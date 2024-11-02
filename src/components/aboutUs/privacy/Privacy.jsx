import React from 'react'
import Navbar5 from '../../home/Navbar5'
import Footer from '../../Footer'
import PrivacyText from './PrivacyText'

const Privacy = () => {
  return (
    <>
        <Navbar5/>
        <div className='container' style={{marginTop:"80px"}}>

            <PrivacyText/>
            
        </div>
        <Footer/>
    </>
  )
}

export default Privacy
